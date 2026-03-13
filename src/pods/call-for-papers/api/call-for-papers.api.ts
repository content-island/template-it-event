import { client } from "#/lib/client";
import type { LanguageCode } from "@content-island/api-client";
import type { CallForPapersApiModel } from "./call-for-papers.api-model";

export async function getCallForPapers(language: LanguageCode): Promise<CallForPapersApiModel | null> {
  try {
    const list = await client.getContentList<CallForPapersApiModel>({ contentType: "CallForPapers", language });
    return list[0] ?? null;
  } catch {
    return null;
  }
}
