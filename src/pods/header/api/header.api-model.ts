export interface NavigationItemApiModel {
  id: string;
  label: string;
  url: string;
}

export interface HeaderApiModel {
  id: string;
  eventName: string;
  NavigationItems: NavigationItemApiModel[];
  ctaText: string;
  ctaUrl: string;
}
