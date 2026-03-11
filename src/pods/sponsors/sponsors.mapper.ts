import type { SponsorsSectionApiModel } from "./api/sponsors.api-model";
import type { SponsorsSectionModel } from "./sponsors.model";

export function mapSponsorsSection(api: SponsorsSectionApiModel): SponsorsSectionModel {
  return {
    title: api.title,
    description: api.description,
    sponsors: (api.SponsorItems ?? []).map((s) => ({
      id: s.id,
      name: s.name,
      logoUrl: s.logo?.url,
      websiteUrl: s.websiteUrl,
      tier: s.tier,
    })),
    ctaText: api.ctaText,
    ctaUrl: api.ctaUrl,
  };
}
