import type { PrivacyPolicyApiModel } from "./api/privacy-policy.api-model";
import type { PrivacyPolicyModel } from "./privacy-policy.model";

export function mapPrivacyPolicy(api: PrivacyPolicyApiModel): PrivacyPolicyModel {
  return {
    text: api.text,
    slug: api.slug,
  };
}
