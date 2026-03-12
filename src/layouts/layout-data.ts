import { getThemes } from "#/pods/theme/api/theme.api";
import { mapTheme } from "#/pods/theme/theme.mapper";
import { getGeneral } from "#/pods/general/api/general.api";
import { getFonts } from "#/pods/font/api/font.api";
import type { ThemeModel } from "#/pods/theme/theme.model";
import type { GeneralApiModel } from "#/pods/general/api/general.api-model";
import type { FontApiModel } from "#/pods/font/api/font.api-model";

interface LayoutData {
  theme: ThemeModel | null;
  general: GeneralApiModel | null;
  fonts: FontApiModel[];
}

export async function getLayoutData(): Promise<LayoutData> {
  const [themes, general, fonts] = await Promise.all([
    getThemes(),
    getGeneral(),
    getFonts(),
  ]);

  const theme = themes.length > 0 ? mapTheme(themes) : null;

  return { theme, general, fonts };
}
