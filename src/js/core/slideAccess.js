export function hasOpenableSlides(node, developerMode = false) {
  if (!node || node.slides === undefined) return false;
  return !node.developerOnlySlides || developerMode;
}
