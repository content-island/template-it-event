import type { SponsorsSectionApiModel } from "./api/sponsors.api-model";
import type { SponsorsSectionModel } from "./sponsors.model";

export function mapSponsorsSection(api: SponsorsSectionApiModel): SponsorsSectionModel {
  return {
    title: api.title,
    description: api.description,
    sponsors: (api.SponsorItems ?? []).map((s) => ({
      id: s.id,
      name: s.name,
      logoDarkUrl: s.logoDark?.url,
      logoLightUrl: s.logoLight?.url,
      websiteUrl: s.websiteUrl,
      tier: s.tier,
    })),
    ctaText: api.ctaText,
    ctaUrl: api.ctaUrl,
  };
}
