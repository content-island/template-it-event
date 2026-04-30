export interface InfoBarApiModel {
  id: string;
  lastUpdate: string;
  venueName: string;
  venueLocation: string;
  eventTitle: string;
  start: string;    // DD/MM/YYYY
  endDate: string;  // DD/MM/YYYY
  timezone: string; // IANA timezone, e.g. "Europe/Madrid"
  eventDescription?: string;
  shareLinkUrl: string;
  addToCalendarText: string;
  shareText: string;
}
