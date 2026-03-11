import { client } from "#/lib/client";
import type { ThemeApiModel, ThemeDarkApiModel, ThemeLightApiModel } from "./theme.api-model";

export async function getTheme(): Promise<ThemeApiModel | null> {
  try {
    const list = await client.getContentList<ThemeApiModel>({ contentType: "Theme" });
    return list[0] ?? null;
  } catch {
    return null;
  }
}

export async function getThemeDark(id: string): Promise<ThemeDarkApiModel | null> {
  try {
    const list = await client.getContentList<ThemeDarkApiModel>({ contentType: "ThemeDark" });
    return list.find(item => item.id === id) ?? null;
  } catch {
    return null;
  }
}

export async function getThemeLight(id: string): Promise<ThemeLightApiModel | null> {
  try {
    const list = await client.getContentList<ThemeLightApiModel>({ contentType: "ThemeLight" });
    return list.find(item => item.id === id) ?? null;
  } catch {
    return null;
  }
}
