import { client } from "#/lib/client";
import type { InfoBarApiModel } from "./info-bar.api-model";

export async function getInfoBar(): Promise<InfoBarApiModel | null> {
  try {
    const list = await client.getContentList<InfoBarApiModel>({ contentType: "InfoBar" });
    return list[0] ?? null;
  } catch {
    return null;
  }
}
