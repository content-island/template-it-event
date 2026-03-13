import { client } from "#/lib/client";
import type { LanguageCode } from "@content-island/api-client";
import type { PrivacyPolicyApiModel } from "./privacy-policy.api-model";

export async function getPrivacyPolicy(language: LanguageCode): Promise<PrivacyPolicyApiModel | null> {
  try {
    const list = await client.getContentList<PrivacyPolicyApiModel>({
      contentType: "PrivacyPolicy",
      language,
    });
    return list[0] ?? null;
  } catch {
    return null;
  }
}
