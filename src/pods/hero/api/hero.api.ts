import { client } from "#/lib/client";
import type { LanguageCode } from "@content-island/api-client";
import type { HeroSectionApiModel } from "./hero.api-model";

export async function getHeroSection(language: LanguageCode): Promise<HeroSectionApiModel | null> {
  try {
    const list = await client.getContentList<HeroSectionApiModel>({ contentType: "HeroSection", language });
    return list[0] ?? null;
  } catch {
    return null;
  }
}
