export interface FAQItemModel {
  id: string;
  question: string;
  answer: string;
}

export interface FAQSectionModel {
  title: string;
  description: string;
  items: FAQItemModel[];
}
