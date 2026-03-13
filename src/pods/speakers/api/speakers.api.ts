import { client } from "#/lib/client";
import type { LanguageCode } from "@content-island/api-client";
import type {
  SpeakersSectionApiModel,
  SpeakersSectionRawApiModel,
} from "./speakers.api-model";

export async function getSpeakersSection(language: LanguageCode): Promise<SpeakersSectionApiModel | null> {
  try {
    const list = await client.getContentList<SpeakersSectionRawApiModel>({
      contentType: "SpeakersSection",
      language,
      includeRelatedContent: true,
    });

    return list[0] ?? null;
  } catch {
    return null;
  }
}
