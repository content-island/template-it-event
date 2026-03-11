import { client } from "#/lib/client";
import type { CookiesApiModel } from "./cookies.api-model";

export async function getCookies(): Promise<CookiesApiModel | null> {
  try {
    const list = await client.getContentList<CookiesApiModel>({
      contentType: "Cookies",
    });
    return list[0] ?? null;
  } catch {
    return null;
  }
}
