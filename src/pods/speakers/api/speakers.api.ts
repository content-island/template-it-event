import { client } from "#/lib/client";
import type {
  SpeakersSectionApiModel,
  SpeakersSectionRawApiModel,
} from "./speakers.api-model";

export async function getSpeakersSection(): Promise<SpeakersSectionApiModel | null> {
  try {
    const list = await client.getContentList<SpeakersSectionRawApiModel>({
      contentType: "SpeakersSection",
      includeRelatedContent: true,
    });

    return list[0] ?? null;
  } catch {
    return null;
  }
}
