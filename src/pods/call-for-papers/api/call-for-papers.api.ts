import { client } from "#/lib/client";
import type { CallForPapersApiModel } from "./call-for-papers.api-model";

export async function getCallForPapers(): Promise<CallForPapersApiModel | null> {
  try {
    const list = await client.getContentList<CallForPapersApiModel>({ contentType: "CallForPapers" });
    return list[0] ?? null;
  } catch {
    return null;
  }
}
