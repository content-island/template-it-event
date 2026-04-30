import { client } from "#/lib/client";
import type { LanguageCode } from "@content-island/api-client";
import type { FooterApiModel } from "./footer.api-model";

export async function getFooter(language: LanguageCode): Promise<FooterApiModel | null> {
  try {
    const list = await client.getContentList<FooterApiModel>({
      contentType: "Footer",
      language,
      includeRelatedContent: true,
    });
    return list[0] ?? null;
  } catch {
    return null;
  }
}
