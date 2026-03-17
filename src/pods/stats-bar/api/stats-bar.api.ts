import { client } from "#/lib/client";
import type { LanguageCode } from "@content-island/api-client";
import type { StatsBarApiModel } from "./stats-bar.api-model";

export async function getStatsBar(language: LanguageCode): Promise<StatsBarApiModel | null> {
  try {
    const list = await client.getContentList<StatsBarApiModel>({
      contentType: "StatsBar",
      language,
      includeRelatedContent: true,
    });
    return list[0] ?? null;
  } catch {
    return null;
  }
}
