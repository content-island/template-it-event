import { client } from "#/lib/client";
import type { LanguageCode } from "@content-island/api-client";
import type { ScheduleSectionApiModel } from "./schedule.api-model";

export async function getScheduleSection(language: LanguageCode): Promise<ScheduleSectionApiModel | null> {
  try {
    const list = await client.getContentList<ScheduleSectionApiModel>({
      contentType: "ScheduleSection",
      language,
      includeRelatedContent: true,
    });
    return list[0] ?? null;
  } catch {
    return null;
  }
}
