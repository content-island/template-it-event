import type { HeroSectionApiModel } from "./api/hero.api-model";
import type { HeroSectionModel } from "./hero.model";

export function mapHeroSection(api: HeroSectionApiModel): HeroSectionModel {
  return {
    title: api.title,
    date: formatDate(api.date),
    location: api.location,
    description: api.description,
    ticketCtaText: api.ticketCtaText,
    ticketCtaUrl: api.ticketCtaUrl,
  };
}

function formatDate(isoDate: string): string {
  const date = new Date(isoDate);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
