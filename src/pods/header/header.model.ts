export interface NavigationItemModel {
  label: string;
  url: string;
}

export interface HeaderModel {
  eventName: string;
  navigationItems: NavigationItemModel[];
  ctaText: string;
  ctaUrl: string;
}
