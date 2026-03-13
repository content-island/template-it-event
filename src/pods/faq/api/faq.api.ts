import { client } from "#/lib/client";
import type { LanguageCode } from "@content-island/api-client";
import type { FAQSectionApiModel } from "./faq.api-model";

export async function getFaqSection(language: LanguageCode): Promise<FAQSectionApiModel | null> {
  try {
    const list = await client.getContentList<FAQSectionApiModel>({
      contentType: "FAQSection",
      language,
      includeRelatedContent: true,
    });
    return list[0] ?? null;
  } catch {
    return null;
  }
}
