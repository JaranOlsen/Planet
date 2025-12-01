"use strict";

// Lightweight helpers to talk to Supabase REST without extra deps.
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL ?? "";
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY ?? "";

function hasSupabaseConfig() {
  return Boolean(SUPABASE_URL && SUPABASE_ANON_KEY);
}

async function postJson(path, payload) {
  if (!hasSupabaseConfig()) {
    throw new Error("Missing Supabase configuration");
  }
  const response = await fetch(`${SUPABASE_URL}${path}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      apikey: SUPABASE_ANON_KEY,
      Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
      Prefer: "return=minimal"
    },
    body: JSON.stringify(payload)
  });
  if (!response.ok) {
    const text = await response.text();
    throw new Error(text || `Request failed with ${response.status}`);
  }
  return true;
}

async function getJson(path) {
  if (!hasSupabaseConfig()) {
    throw new Error("Missing Supabase configuration");
  }
  const response = await fetch(`${SUPABASE_URL}${path}`, {
    method: "GET",
    headers: {
      apikey: SUPABASE_ANON_KEY,
      Authorization: `Bearer ${SUPABASE_ANON_KEY}`
    }
  });
  if (!response.ok) {
    const text = await response.text();
    throw new Error(text || `Request failed with ${response.status}`);
  }
  return response.json();
}

/**
 * Persist user feedback about a statement/response.
 * Expects a Supabase table `feedback` with matching columns and RLS policy that allows
 * inserts using the anon key.
 */
export async function submitFeedback(payload) {
  return postJson("/rest/v1/feedback", payload);
}

/**
 * Redeem an access code to unlock paid content.
 * Expects a Supabase table `entitlements` with columns:
 *   access_code (text, primary key), access_level (text), expires_at (timestamptz)
 * and an RLS policy that permits selecting by access_code using the anon key.
 */
export async function redeemAccessCode(code) {
  const encoded = encodeURIComponent(code);
  const data = await getJson(`/rest/v1/entitlements?access_code=eq.${encoded}&select=access_level,expires_at`);
  if (!Array.isArray(data) || data.length === 0) {
    throw new Error("invalid_code");
  }
  const entry = data[0];
  return {
    accessLevel: entry.access_level ?? "free",
    expiresAt: entry.expires_at ?? null
  };
}

export function isSupabaseReady() {
  return hasSupabaseConfig();
}

function getUserAgent() {
  if (typeof navigator === "undefined") return null;
  return navigator.userAgent ?? null;
}

function getCountryGuess() {
  if (typeof navigator === "undefined") return null;
  const locale = navigator.language || (Array.isArray(navigator.languages) ? navigator.languages[0] : "");
  if (!locale) return null;
  const parts = locale.split(/[-_]/);
  if (parts.length >= 2 && parts[1]) {
    return parts[1].toUpperCase();
  }
  return null;
}

/**
 * Log any access code attempt (success or failure) for simple counts and geo hints.
 * Expects a Supabase table `access_code_usage` with columns:
 *  access_code (text), status (text), language_id (text), country (text),
 *  user_agent (text), created_at (timestamptz default now()).
 */
export async function logAccessCodeAttempt({ code, status, languageId }) {
  if (!hasSupabaseConfig()) return;
  const payload = {
    access_code: code,
    status,
    language_id: languageId ?? null,
    country: getCountryGuess(),
    user_agent: getUserAgent(),
    created_at: new Date().toISOString()
  };
  try {
    await postJson("/rest/v1/access_code_usage", payload);
  } catch (err) {
    // Logging should never break unlocking; surface quietly.
    console.warn("Failed to log access code usage", err);
  }
}
