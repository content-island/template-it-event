import { Theme, type ThemeModeModel, type ThemeModel } from "#/pods/theme/theme.model";
import { generateColorScaleVars } from "./color-scale";

function buildModeVars(mode: ThemeModeModel): string {
  return [
    `--color-base-100: ${mode.colorBackground}`,
    `--color-base-200: ${mode.colorSurface}`,
    `--color-base-300: ${mode.colorCard}`,
    `--color-base-content: ${mode.colorText}`,
  ].join("; ");
}

function buildSharedVars(theme: ThemeModel): string {
  return [
    `--color-primary: ${theme.colorPrimary}`,
    `--color-secondary: ${theme.colorSecondary}`,
    `--font-title: ${theme.fontTitle}`,
    `--font-body: ${theme.fontBody}`,
    generateColorScaleVars(theme.colorPrimary, "primary"),
    generateColorScaleVars(theme.colorSecondary, "secondary"),
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
