export interface ScheduleItemApiModel {
  id: string;
  time: string;
  title: string;
  description: string;
  highlighted: boolean;
}

export interface ScheduleSectionApiModel {
  id: string;
  title: string;
  ScheduleItems: ScheduleItemApiModel[];
}
