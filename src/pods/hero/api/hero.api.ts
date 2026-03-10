import { client } from "#/lib/client";
import type { HeroSectionApiModel } from "./hero.api-model";

export async function getHeroSection(): Promise<HeroSectionApiModel | null> {
  try {
    const list = await client.getContentList<HeroSectionApiModel>({ contentType: "HeroSection" });
    return list[0] ?? null;
  } catch {
    return null;
  }
}
