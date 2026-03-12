import type { Media } from "@content-island/api-client";

export interface SocialLinkApiModel {
  id: string;
  tag: string;
  url: string;
}

export interface SpeakerItemRawApiModel {
  id: string;
  name: string;
  jobTitle: string;
  company: string;
  description: string;
  SocialLinks?: SocialLinkApiModel[];
  imageUrl: Media;
}

export interface SpeakerItemApiModel {
  id: string;
  name: string;
  jobTitle: string;
  company: string;
  description: string;
  SocialLinks?: SocialLinkApiModel[];
  imageUrl: Media;
}

export interface SpeakersSectionRawApiModel {
  id: string;
  title: string;
  SpeakersItems: SpeakerItemRawApiModel[];
}

export interface SpeakersSectionApiModel {
  id: string;
  title: string;
  SpeakersItems: SpeakerItemApiModel[];
}
