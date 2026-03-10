/**
 * Generates a color scale (50–950) from a base hex color.
 * Each step adjusts lightness while preserving the hue and saturation.
 */

function hexToHsl(hex: string): [number, number, number] {
  const clean = hex.replace("#", "");
  const r = parseInt(clean.slice(0, 2), 16) / 255;
  const g = parseInt(clean.slice(2, 4), 16) / 255;
  const b = parseInt(clean.slice(4, 6), 16) / 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0;
  let s = 0;
  const l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
        break;
      case g:
        h = ((b - r) / d + 2) / 6;
        break;
      case b:
        h = ((r - g) / d + 4) / 6;
        break;
    }
  }

  return [Math.round(h * 360), Math.round(s * 100), Math.round(l * 100)];
}

function hslToHex(h: number, s: number, l: number): string {
  const hNorm = h / 360;
  const sNorm = s / 100;
  const lNorm = l / 100;

  const hue2rgb = (p: number, q: number, t: number): number => {
    let tt = t;
    if (tt < 0) tt += 1;
    if (tt > 1) tt -= 1;
    if (tt < 1 / 6) return p + (q - p) * 6 * tt;
    if (tt < 1 / 2) return q;
    if (tt < 2 / 3) return p + (q - p) * (2 / 3 - tt) * 6;
    return p;
  };

  let r: number, g: number, b: number;

  if (sNorm === 0) {
    r = g = b = lNorm;
  } else {
    const q =
      lNorm < 0.5
        ? lNorm * (1 + sNorm)
        : lNorm + sNorm - lNorm * sNorm;
    const p = 2 * lNorm - q;
    r = hue2rgb(p, q, hNorm + 1 / 3);
    g = hue2rgb(p, q, hNorm);
    b = hue2rgb(p, q, hNorm - 1 / 3);
  }

  const toHex = (x: number) =>
    Math.round(x * 255)
      .toString(16)
      .padStart(2, "0");

  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

// Fixed lightness levels per step (perceptually spread scale)
const SCALE_LIGHTNESS: Record<string, number> = {
  "50": 97,
  "100": 93,
  "200": 85,
  "300": 74,
  "400": 62,
  "500": 50,
  "600": 40,
  "700": 30,
  "800": 22,
  "900": 14,
  "950": 9,
};

export function generateColorScale(
  hex: string
): Record<string, string> {
  const [h, s] = hexToHsl(hex);
  const scale: Record<string, string> = {};

  for (const [step, lightness] of Object.entries(SCALE_LIGHTNESS)) {
    scale[step] = hslToHex(h, s, lightness);
  }

  return scale;
}

/**
 * Converts a color scale into CSS custom property declarations.
 * e.g. generateColorScaleVars("#6C63FF", "primary")
 * → "--color-primary-50: #f5f4ff; --color-primary-100: ..."
 */
export function generateColorScaleVars(
  hex: string,
  name: string
): string {
  const scale = generateColorScale(hex);
  return Object.entries(scale)
    .map(([step, color]) => `--color-${name}-${step}: ${color}`)
    .join("; ");
}
