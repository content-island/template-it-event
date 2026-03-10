export interface SponsorItemApiModel {
  id: string;
  name: string;
  logoUrl?: string;
  websiteUrl: string;
  tier: "Platinium" | "Gold" | "Silver";
}

export interface SponsorsSectionApiModel {
  id: string;
  title: string;
  description: string;
  SponsorItems: SponsorItemApiModel[];
  ctaText: string;
  ctaUrl: string;
}
