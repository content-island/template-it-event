import { client } from "#/lib/client";
import type { LanguageCode } from "@content-island/api-client";
import type { CookiesApiModel } from "./cookies.api-model";

export async function getCookies(language: LanguageCode): Promise<CookiesApiModel | null> {
  try {
    const list = await client.getContentList<CookiesApiModel>({
      contentType: "Cookies",
      language,
    });
    return list[0] ?? null;
  } catch {
    return null;
  }
}
