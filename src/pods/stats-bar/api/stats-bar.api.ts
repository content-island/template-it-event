import { client } from "#/lib/client";
import type { StatsBarApiModel } from "./stats-bar.api-model";

export async function getStatsBar(): Promise<StatsBarApiModel | null> {
  try {
    const list = await client.getContentList<StatsBarApiModel>({
      contentType: "StatsBar",
      includeRelatedContent: true,
    });
    return list[0] ?? null;
  } catch {
    return null;
  }
}
