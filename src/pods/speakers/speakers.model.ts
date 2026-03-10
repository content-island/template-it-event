import type { SocialTags } from "#shared/social-tags.model";

export interface SocialLinkModel {
  tag: SocialTags;
  url: string;
}

export interface SpeakerItemModel {
  id: string;
  name: string;
  jobTitle: string;
  company: string;
  description: string;
  socialLinks: SocialLinkModel[];
  imageUrl: string;
  imageName: string;
}

export interface SpeakersSectionModel {
  title: string;
  speakers: SpeakerItemModel[];
}
