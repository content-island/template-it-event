import { client } from "#/lib/client";
import type { FAQSectionApiModel } from "./faq.api-model";

export async function getFaqSection(): Promise<FAQSectionApiModel | null> {
  try {
    const list = await client.getContentList<FAQSectionApiModel>({
      contentType: "FAQSection",
      includeRelatedContent: true,
    });
    return list[0] ?? null;
  } catch {
    return null;
  }
}
