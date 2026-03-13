import { client } from "#/lib/client";
import type { LanguageCode } from "@content-island/api-client";
import type { CookieBannerApiModel } from "./cookie-banner.api-model";

export async function getCookieBanner(language: LanguageCode): Promise<CookieBannerApiModel | null> {
  try {
    const list = await client.getContentList<CookieBannerApiModel>({
      contentType: "CookieBanner",
      language
    });
    return list[0] ?? null;
  } catch {
    return null;
  }
}
