export interface GoogleCalendarEventOptions {
  title: string;
  startDate: string; // ISO 8601
  endDate: string;   // ISO 8601
  location?: string;
  description?: string;
  timezone?: string;
}

function toAllDayDate(iso: string): string {
  // "2026-09-03T00:00:00.000Z" → "20260903"
  return iso.slice(0, 10).replace(/-/g, "");
}

export function buildGoogleCalendarUrl(options: GoogleCalendarEventOptions): string {
  const endDate = new Date(options.endDate);
  endDate.setUTCDate(endDate.getUTCDate() + 1);

  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: options.title,
    dates: `${toAllDayDate(options.startDate)}/${toAllDayDate(endDate.toISOString())}`,
  });

  if (options.location) params.set("location", options.location);
  if (options.timezone) params.set("ctz", options.timezone);
  if (options.description) params.set("details", options.description);

  return `https://www.google.com/calendar/render?${params.toString()}`;
}
