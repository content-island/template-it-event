export interface StatItemApiModel {
  id: string;
  label: string;
  value: string;
}

export interface StatsBarApiModel {
  id: string;
  stats: StatItemApiModel[];
}
