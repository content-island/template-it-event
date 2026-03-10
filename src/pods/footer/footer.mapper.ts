import type { SocialTags } from "#shared/social-tags.model";
import type { FooterApiModel } from "./api/footer.api-model";
import type { FooterModel } from "./footer.model";

export function mapFooter(api: FooterApiModel): FooterModel {
  return {
    text: api.text,
    socialLinks: (api.SocialLinks ?? []).map((link) => ({
      tag: link.tag as SocialTags,
      url: link.url,
    })),
  };
}
