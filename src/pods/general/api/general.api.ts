import { client } from "#/lib/client";
import type { GeneralApiModel } from "./general.api-model";

export async function getGeneral(): Promise<GeneralApiModel | null> {
  try {
    const list = await client.getContentList<GeneralApiModel>({ contentType: "General" });
    return list[0] ?? null;
  } catch {
    return null;
  }
}
