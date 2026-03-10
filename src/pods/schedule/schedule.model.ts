export interface ScheduleItemModel {
  id: string;
  time: string;
  title: string;
  description: string;
  highlighted: boolean;
}

export interface ScheduleSectionModel {
  title: string;
  items: ScheduleItemModel[];
}
