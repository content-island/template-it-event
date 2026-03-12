import type { CallForPapersApiModel } from "./api/call-for-papers.api-model";
import type { CallForPapersModel } from "./call-for-papers.model";

export function mapCallForPapers(api: CallForPapersApiModel): CallForPapersModel {
  return {
    active: api.active,
    ctaText: api.ctaText,
    url: api.url,
  };
}
