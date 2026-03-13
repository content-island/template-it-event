import type { HeaderApiModel } from "./api/header.api-model";
import type { HeaderModel } from "./header.model";

export function mapHeader(api: HeaderApiModel): HeaderModel {
  return {
    eventName: api.eventName,
    navigationItems: (api.NavigationItems ?? []).map((item) => ({
      label: item.label,
      url: item.url,
    })),
    ctaText: api.ctaText,
    ctaUrl: api.ctaUrl,
  };
}
