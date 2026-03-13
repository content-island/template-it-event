import { client } from "#/lib/client";
import type { LanguageCode } from "@content-island/api-client";
import type { HeaderApiModel } from "./header.api-model";

export async function getHeader(language: LanguageCode): Promise<HeaderApiModel | null> {
  try {
    const list = await client.getContentList<HeaderApiModel>({
      contentType: "Header",
      language,
      includeRelatedContent: true,
    });
    return list[0] ?? null;
  } catch {
    return null;
  }
}
