import type { ScheduleSectionApiModel } from "./api/schedule.api-model";
import type { ScheduleSectionModel } from "./schedule.model";

function formatTime(isoString: string): string {
  try {
    const date = new Date(isoString);
    return date.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: false });
  } catch {
    return isoString;
  }
}

export function mapScheduleSection(api: ScheduleSectionApiModel): ScheduleSectionModel {
  return {
    title: api.title,
    items: (api.ScheduleItems ?? []).map((item) => ({
      id: item.id,
      time: formatTime(item.time),
      title: item.title,
      description: item.description,
      highlighted: item.highlighted,
    })),
  };
}
