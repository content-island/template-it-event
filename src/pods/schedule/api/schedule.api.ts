import { client } from "#/lib/client";
import type { ScheduleSectionApiModel } from "./schedule.api-model";

export async function getScheduleSection(): Promise<ScheduleSectionApiModel | null> {
  try {
    const list = await client.getContentList<ScheduleSectionApiModel>({
      contentType: "ScheduleSection",
      includeRelatedContent: true,
    });
    return list[0] ?? null;
  } catch {
    return null;
  }
}
