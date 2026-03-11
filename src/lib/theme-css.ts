import { Theme, type ThemeModeModel, type ThemeModel } from "#/pods/theme/theme.model";
import { generateColorScaleVars } from "./color-scale";
import { sanitizeColor, sanitizeHexColor, sanitizeFontFamily } from "./sanitize-css";

function buildModeVars(mode: ThemeModeModel): string {
  return [
    `--color-base-100: ${sanitizeColor(mode.colorBackground)}`,
    `--color-base-200: ${sanitizeColor(mode.colorSurface)}`,
    `--color-base-300: ${sanitizeColor(mode.colorCard)}`,
    `--color-base-content: ${sanitizeColor(mode.colorText)}`,
  ].join("; ");
}

function buildSharedVars(theme: ThemeModel): string {
  const primary = sanitizeHexColor(theme.colorPrimary);
  const secondary = sanitizeHexColor(theme.colorSecondary);

  return [
    `--color-primary: ${primary}`,
    `--color-secondary: ${secondary}`,
    `--font-title: ${sanitizeFontFamily(theme.fontTitle)}`,
    `--font-body: ${sanitizeFontFamily(theme.fontBody)}`,
    generateColorScaleVars(primary, "primary"),
    generateColorScaleVars(secondary, "secondary"),
  ].join("; ");
}

export function buildThemeCSS(theme: ThemeModel): string {
  const shared = buildSharedVars(theme);
  const darkVars = theme.dark ? buildModeVars(theme.dark) : "";
  const lightVars = theme.light ? buildModeVars(theme.light) : "";

  return `
    [data-theme="${Theme.Dark}"] { ${shared}; ${darkVars} }
    [data-theme="${Theme.Light}"] { ${shared}; ${lightVars} }
  `;
}
