/**
 * All values injected into a <style> block via set:html must pass through
 * one of these functions. Any value that does not match the expected format
 * is replaced with a known-safe fallback so the style tag cannot be escaped.
 *
 * Attack model: an attacker influences a CMS field value to contain
 * `</style><script>…</script>` — these validators reject such input at the
 * boundary before it reaches the CSS string.
 */

/** Matches #rgb | #rrggbb | #rrggbbaa */
const HEX_COLOR_RE = /^#[0-9a-fA-F]{3,8}$/;

/**
 * Matches CSS color functions whose argument list contains only
 * digits, spaces, commas, dots, slashes, percent signs, and letters
 * (covers rgb, rgba, hsl, hsla, oklch, color, etc.).
 */
const CSS_COLOR_FN_RE = /^(?:rgb|rgba|hsl|hsla|oklch|hwb|lch|lab|color)\([\d .,/%a-zA-Z]+\)$/;

/** Matches CSS named colors — only lowercase ASCII letters. */
const CSS_NAMED_COLOR_RE = /^[a-z]+$/;

/**
 * Sanitizes a CSS color value (any format).
 * Returns `transparent` if the value does not match a known-safe pattern.
 */
export function sanitizeColor(value: string): string {
  const v = value.trim();
  if (HEX_COLOR_RE.test(v) || CSS_COLOR_FN_RE.test(v) || CSS_NAMED_COLOR_RE.test(v)) {
    return v;
  }
  return "transparent";
}

/**
 * Sanitizes a hex color value.
 * Required for fields that are passed to `generateColorScaleVars`, which
 * expects strict hex input.
 * Returns `#000000` if the value is not a valid hex color.
 */
export function sanitizeHexColor(value: string): string {
  const v = value.trim();
  return HEX_COLOR_RE.test(v) ? v : "#000000";
}

/**
 * Sanitizes a CSS font-family value.
 * Allows letters, digits, spaces, hyphens, underscores, commas, quotes,
 * and dots — the full set needed for real font names and stacks.
 * Returns `sans-serif` if the value contains any other character.
 */
export function sanitizeFontFamily(value: string): string {
  const v = value.trim();
  return /^[a-zA-Z0-9 ,'".\-_]+$/.test(v) ? v : "sans-serif";
}
