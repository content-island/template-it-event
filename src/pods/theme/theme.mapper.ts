import type { ThemeApiModel } from "./api/theme.api-model";
import type { ThemeVariantModel, ThemeModel } from "./theme.model";

function mapThemeVariant(api: ThemeApiModel): ThemeVariantModel {
  return {
    colorPrimary: api.colorPrimary,
    colorSecondary: api.colorSecondary,
    fontTitle: api.fontTitle,
    fontBody: api.fontBody,
    colorBackground: api.colorBackground,
    colorSurface: api.colorSurface,
    colorCard: api.colorCard,
    colorText: api.colorText,
  };
}

export function mapTheme(themes: ThemeApiModel[]): ThemeModel {
  const darkApi = themes.find((t) => t.isDark) ?? null;
  const lightApi = themes.find((t) => !t.isDark) ?? null;

  return {
    dark: darkApi ? mapThemeVariant(darkApi) : null,
    light: lightApi ? mapThemeVariant(lightApi) : null,
  };
}
