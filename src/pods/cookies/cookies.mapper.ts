import type { CookiesApiModel } from "./api/cookies.api-model";
import type { CookiesModel } from "./cookies.model";

export function mapCookies(api: CookiesApiModel): CookiesModel {
  return {
    text: api.text,
    slug: api.slug,
  };
}
