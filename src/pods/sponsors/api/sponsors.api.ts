import { client } from "#/lib/client";
import type { LanguageCode } from "@content-island/api-client";
import type { SponsorsSectionApiModel } from "./sponsors.api-model";

export async function getSponsorsSection(language: LanguageCode): Promise<SponsorsSectionApiModel | null> {
  try {
    const list = await client.getContentList<SponsorsSectionApiModel>({
      contentType: "SponsorsSection",
      language,
      includeRelatedContent: true,
    });
    return list[0] ?? null;
  } catch {
    return null;
  }
}
