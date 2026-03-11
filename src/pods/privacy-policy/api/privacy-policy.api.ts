import { client } from "#/lib/client";
import type { PrivacyPolicyApiModel } from "./privacy-policy.api-model";

export async function getPrivacyPolicy(): Promise<PrivacyPolicyApiModel | null> {
  try {
    const list = await client.getContentList<PrivacyPolicyApiModel>({
      contentType: "PrivacyPolicy",
    });
    return list[0] ?? null;
  } catch {
    return null;
  }
}
