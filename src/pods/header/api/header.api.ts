import { client } from "#/lib/client";
import type { HeaderApiModel } from "./header.api-model";

export async function getHeader(): Promise<HeaderApiModel | null> {
  try {
    const list = await client.getContentList<HeaderApiModel>({
      contentType: "Header",
      includeRelatedContent: true,
    });
    return list[0] ?? null;
  } catch {
    return null;
  }
}
