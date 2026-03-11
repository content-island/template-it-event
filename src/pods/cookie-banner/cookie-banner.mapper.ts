import type { CookieBannerApiModel } from "./api/cookie-banner.api-model";
import type { CookieBannerModel } from "./cookie-banner.model";

export function mapCookieBanner(api: CookieBannerApiModel): CookieBannerModel {
  return {
    title: api.title,
    description: api.description,
    learnMore: api.learnMore,
    acceptAll: api.acceptAll,
    onlyEssential: api.onlyEssential,
  };
}
