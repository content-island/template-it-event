export interface FAQItemApiModel {
  id: string;
  question: string;
  answer: string;
}

export interface FAQSectionApiModel {
  id: string;
  title: string;
  description?: string;
  FAQItems: FAQItemApiModel[];
}
