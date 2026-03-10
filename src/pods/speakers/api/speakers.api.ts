import { client } from "#/lib/client";
import type {
  SocialLinkApiModel,
  SpeakersSectionApiModel,
  SpeakersSectionRawApiModel,
} from "./speakers.api-model";

export async function getSpeakersSection(): Promise<SpeakersSectionApiModel | null> {
  try {
    const [list, socialLinks] = await Promise.all([
      client.getContentList<SpeakersSectionRawApiModel>({
        contentType: "SpeakersSection",
        includeRelatedContent: true,
      }),
      client.getContentList<SocialLinkApiModel>({
        contentType: "SocialLink",
      }),
    ]);

    const raw = list[0] ?? null;
    if (!raw) return null;

    const socialLinksMap = new Map(socialLinks.map((l) => [l.id, l]));

    return {
      ...raw,
      SpeakersItems: (raw.SpeakersItems ?? []).map((speaker) => ({
        ...speaker,
        SocialLinks: (speaker.SocialLinks ?? [])
          .map((id) => socialLinksMap.get(id))
          .filter((l): l is SocialLinkApiModel => Boolean(l)),
      })),
    };
  } catch {
    return null;
  }
}
