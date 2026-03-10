import { client } from "#/lib/client";
import type { FooterApiModel } from "./footer.api-model";

export async function getFooter(): Promise<FooterApiModel | null> {
  try {
    const list = await client.getContentList<FooterApiModel>({
      contentType: "Footer",
      includeRelatedContent: true,
    });
    return list[0] ?? null;
  } catch {
    return null;
  }
}
