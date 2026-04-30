import type { InfoBarApiModel } from "./api/info-bar.api-model";
import type { InfoBarModel } from "./info-bar.model";
import { buildGoogleCalendarUrl } from "#/lib/google-calendar";

export function mapInfoBar(api: InfoBarApiModel): InfoBarModel {
  return {
    venueName: api.venueName,
    venueLocation: api.venueLocation,
    addToCalendarUrl: api.start && api.endDate
      ? buildGoogleCalendarUrl({
          title: api.eventTitle,
          startDate: api.start,
          endDate: api.endDate,
          location: `${api.venueName}, ${api.venueLocation}`,
          timezone: api.timezone,
          description: api.eventDescription,
        })
      : "#",
    shareLinkUrl: api.shareLinkUrl,
    addToCalendarText: api.addToCalendarText,
    shareText: api.shareText,
  };
}
