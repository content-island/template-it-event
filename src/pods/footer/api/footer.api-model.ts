export interface SocialLinkApiModel {
  id: string;
  tag: string;
  url: string;
}

export interface FooterApiModel {
  id: string;
  text: string;
  SocialLinks: SocialLinkApiModel[];
}
