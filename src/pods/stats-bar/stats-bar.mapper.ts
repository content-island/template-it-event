import type { StatsBarApiModel } from "./api/stats-bar.api-model";
import type { StatsBarModel } from "./stats-bar.model";

export function mapStatsBar(api: StatsBarApiModel): StatsBarModel {
  return {
    stats: (api.stats ?? []).map((s) => ({
      label: s.label,
      value: s.value,
    })),
  };
}
