import { client } from "#/lib/client";
import type { FontApiModel } from "./font.api-model";

export async function getFonts(): Promise<FontApiModel[]> {
  try {
    return await client.getContentList<FontApiModel>({ contentType: "Font" });
  } catch {
    return [];
  }
}
