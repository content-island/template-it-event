import type { ThemeApiModel, ThemeDarkApiModel, ThemeLightApiModel } from "./api/theme.api-model";
import type { ThemeModeModel, ThemeModel } from "./theme.model";

export function mapThemeMode(api: ThemeDarkApiModel | ThemeLightApiModel): ThemeModeModel {
  return {
    colorBackground: api.colorBackground,
    colorSurface: api.colorSurface,
    colorCard: api.colorCard,
    colorText: api.colorText,
  };
}

export function mapTheme(
  api: ThemeApiModel,
  dark: ThemeDarkApiModel | null,
  light: ThemeLightApiModel | null,
): ThemeModel {
  return {
    name: api.name,
    colorPrimary: api.colorPrimary,
    colorSecondary: api.colorSecondary,
    fontTitle: api.fontTitle,
    fontBody: api.fontBody,
    dark: dark ? mapThemeMode(dark) : null,
    light: light ? mapThemeMode(light) : null,
  };
}
