import type { ThemeApiModel } from "./api/theme.api-model";
import type { ThemeModel } from "./theme.model";

export function mapTheme(api: ThemeApiModel): ThemeModel {
  return {
    name: api.name,
    colorPrimary: api.colorPrimary,
    colorSecondary: api.colorSecondary,
    fontTitle: api.fontTitle,
    fontBody: api.fontBody,
  };
}
