import { client } from "#/lib/client";
import type { ThemeApiModel } from "./theme.api-model";

export async function getTheme(): Promise<ThemeApiModel | null> {
  try {
    const list = await client.getContentList<ThemeApiModel>({ contentType: "Theme" });
    return list[0] ?? null;
  } catch {
    return null;
  }
}
