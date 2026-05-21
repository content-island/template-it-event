import { client } from "#/lib/client";
import type { ThemeApiModel } from "./theme.api-model";

export async function getThemes(): Promise<ThemeApiModel[]> {
  try {
    return await client.getContentList<ThemeApiModel>({ contentType: "Theme" });
  } catch {
    return [];
  }
}
