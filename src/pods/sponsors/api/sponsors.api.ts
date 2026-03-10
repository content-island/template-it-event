import { client } from "#/lib/client";
import type { SponsorsSectionApiModel } from "./sponsors.api-model";

export async function getSponsorsSection(): Promise<SponsorsSectionApiModel | null> {
  try {
    const list = await client.getContentList<SponsorsSectionApiModel>({
      contentType: "SponsorsSection",
      includeRelatedContent: true,
    });
    return list[0] ?? null;
  } catch {
    return null;
  }
}
