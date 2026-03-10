export type SponsorTier = "Platinium" | "Gold" | "Silver";

export interface SponsorItemModel {
  id: string;
  name: string;
  logoUrl: string;
  websiteUrl: string;
  tier: SponsorTier;
}

export interface SponsorsSectionModel {
  title: string;
  description: string;
  sponsors: SponsorItemModel[];
  ctaText: string;
  ctaUrl: string;
}
