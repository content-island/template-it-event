import type { FAQSectionApiModel } from "./api/faq.api-model";
import type { FAQSectionModel } from "./faq.model";

export function mapFaqSection(api: FAQSectionApiModel): FAQSectionModel {
  return {
    title: api.title,
    description: api.description ?? "",
    items: (api.FAQItems ?? []).map((item) => ({
      id: item.id,
      question: item.question,
      answer: item.answer,
    })),
  };
}
