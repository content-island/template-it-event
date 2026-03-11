import { client } from "#/lib/client";
import type { CookieBannerApiModel } from "./cookie-banner.api-model";

export async function getCookieBanner(): Promise<CookieBannerApiModel | null> {
  try {
    const list = await client.getContentList<CookieBannerApiModel>({
      contentType: "CookieBanner",
    });
    return list[0] ?? null;
  } catch {
    return null;
  }
}
