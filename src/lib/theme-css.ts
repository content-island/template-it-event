import { Theme, type ThemeVariantModel, type ThemeModel } from "#/pods/theme/theme.model";
import { generateColorScaleVars } from "./color-scale";
import { sanitizeColor, sanitizeHexColor, sanitizeFontFamily } from "./sanitize-css";

function buildVariantVars(variant: ThemeVariantModel): string {
  const primary = sanitizeHexColor(variant.colorPrimary);
  const secondary = sanitizeHexColor(variant.colorSecondary);

  return [
    `--color-primary: ${primary}`,
    `--color-secondary: ${secondary}`,
    `--font-title: ${sanitizeFontFamily(variant.fontTitle)}`,
    `--font-body: ${sanitizeFontFamily(variant.fontBody)}`,
    generateColorScaleVars(primary, "primary"),
    generateColorScaleVars(secondary, "secondary"),
    `--color-base-100: ${sanitizeColor(variant.colorBackground)}`,
    `--color-base-200: ${sanitizeColor(variant.colorSurface)}`,
    `--color-base-300: ${sanitizeColor(variant.colorCard)}`,
    `--color-base-content: ${sanitizeColor(variant.colorText)}`,
  ].join("; ");
}

export function buildThemeCSS(theme: ThemeModel): string {
  const darkVars = theme.dark ? buildVariantVars(theme.dark) : "";
  const lightVars = theme.light ? buildVariantVars(theme.light) : "";

  return `
    [data-theme="${Theme.Dark}"] { ${darkVars} }
    [data-theme="${Theme.Light}"] { ${lightVars} }
  `;
}
