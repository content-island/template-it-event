import { client } from "#/lib/client";
import type {
  SpeakerItemApiModel,
  SpeakersSectionApiModel,
  SpeakersSectionRawApiModel,
} from "./speakers.api-model";

export async function getSpeakersSection(): Promise<SpeakersSectionApiModel | null> {
  try {
    const [sections, speakerItems] = await Promise.all([
      client.getContentList<SpeakersSectionRawApiModel>({
        contentType: "SpeakersSection",
        includeRelatedContent: true,
      }),
      client.getContentList<SpeakerItemApiModel>({
        contentType: "SpeakerItem",
        includeRelatedContent: true,
      }),
    ]);

    const section = sections[0] ?? null;
    if (!section) return null;

    const speakerItemsMap = new Map(speakerItems.map((item) => [item.id, item]));

    return {
      ...section,
      SpeakersItems: section.SpeakersItems.map(
        (speaker) => speakerItemsMap.get(speaker.id) ?? speaker
      ),
    };
  } catch {
    return null;
  }
}
