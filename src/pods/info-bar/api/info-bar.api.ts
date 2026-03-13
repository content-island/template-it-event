import { client } from "#/lib/client";
import type { LanguageCode } from "@content-island/api-client";
import type { InfoBarApiModel } from "./info-bar.api-model";

export async function getInfoBar(language: LanguageCode): Promise<InfoBarApiModel | null> {
  try {
    const list = await client.getContentList<InfoBarApiModel>({ contentType: "InfoBar", language });
    return list[0] ?? null;
  } catch {
    return null;
  }
}
