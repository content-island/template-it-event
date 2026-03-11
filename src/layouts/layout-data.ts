import { getTheme, getThemeDark, getThemeLight } from "#/pods/theme/api/theme.api";
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
  const rawTheme = await getTheme();

  const [themePair, general, fonts] = await Promise.all([
    rawTheme
      ? Promise.all([
          rawTheme.dark ? getThemeDark(rawTheme.dark) : Promise.resolve(null),
          rawTheme.light ? getThemeLight(rawTheme.light) : Promise.resolve(null),
        ])
      : Promise.resolve([null, null] as const),
    getGeneral(),
    getFonts(),
  ]);

  const theme = rawTheme ? mapTheme(rawTheme, themePair[0], themePair[1]) : null;

  return { theme, general, fonts };
}
