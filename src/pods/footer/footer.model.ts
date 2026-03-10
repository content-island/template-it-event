import type { SocialTags } from "#shared/social-tags.model";

export interface SocialLinkModel {
  tag: SocialTags;
  url: string;
}

export interface FooterModel {
  text: string;
  socialLinks: SocialLinkModel[];
}
