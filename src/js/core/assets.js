export function publicAsset(value) {
  if (!value) return '';
  const raw = String(value).trim();
  if (/^(https?:|data:|blob:|mailto:|#)/i.test(raw)) return raw;

  const base = import.meta.env?.BASE_URL || '/';
  const normalizedBase = base.endsWith('/') ? base : `${base}/`;

  if (raw.startsWith('/Planet/assets/')) return `${normalizedBase}${raw.slice('/Planet/'.length)}`;
  if (raw.startsWith('/assets/')) return `${normalizedBase}${raw.slice(1)}`;
  if (raw.startsWith('Public/')) return `${normalizedBase}${raw.slice('Public/'.length)}`;
  if (raw.startsWith('./assets/')) return `${normalizedBase}${raw.slice(2)}`;
  if (raw.startsWith('assets/')) return `${normalizedBase}${raw}`;
  if (raw.startsWith('/')) return raw;
  return `${normalizedBase}${raw}`;
}

export function rewriteLegacyAssetPaths(value) {
  return String(value || '')
    .replaceAll('/Planet/assets/', `${publicAsset('assets/')}`)
    .replaceAll('url(/assets/', `url(${publicAsset('assets/')}`);
}
