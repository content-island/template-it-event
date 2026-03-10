import type { SpeakersSectionApiModel } from "./api/speakers.api-model";
import type { SpeakersSectionModel } from "./speakers.model";
import type { SocialTags } from "../../shared/social-tags.model";

export function mapSpeakersSection(api: SpeakersSectionApiModel): SpeakersSectionModel {
  return {
    title: api.title,
    speakers: (api.SpeakersItems ?? []).map((s) => ({
      id: s.id,
      name: s.name,
      jobTitle: s.jobTitle,
      company: s.company,
      description: s.description,
      socialLinks: (s.SocialLinks ?? []).map((link) => ({
        tag: link.tag as SocialTags,
        url: link.url,
      })),
      imageUrl: s.imageUrl?.url ?? "",
      imageName: s.imageUrl?.name ?? s.name,
    })),
  };
}
