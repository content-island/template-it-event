import type { LanguageCode } from "@content-island/api-client";
import { client } from "#/lib/client";

const { languages } = await client.getProject();
export const LANGUAGES: LanguageCode[] = languages;

export const LANGUAGE_NAMES: Partial<Record<LanguageCode, string>> = {
  en: "English",
  es: "Español",
};
