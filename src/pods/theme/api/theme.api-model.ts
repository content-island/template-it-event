export interface ThemeApiModel {
  id: string;
  language: 'en' | 'es';
  lastUpdate: string;
  name: string;
  isDark: boolean;
  colorPrimary: string;
  colorSecondary: string;
  fontTitle: string;
  fontBody: string;
  colorBackground: string;
  colorSurface: string;
  colorCard: string;
  colorText: string;
}
