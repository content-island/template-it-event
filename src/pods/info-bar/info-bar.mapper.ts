import type { InfoBarApiModel } from "./api/info-bar.api-model";
import type { InfoBarModel } from "./info-bar.model";

export function mapInfoBar(api: InfoBarApiModel): InfoBarModel {
  return {
    venueName: api.venueName,
    venueLocation: api.venueLocation,
    addToCalendarUrl: api.addToCalendarUrl,
    shareLinkUrl: api.shareLinkUrl,
  };
}
