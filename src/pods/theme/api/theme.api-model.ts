export interface ThemeDarkApiModel {
  id: string;
  colorBackground: string;
  colorSurface: string;
  colorCard: string;
  colorText: string;
}

export interface ThemeLightApiModel {
  id: string;
  colorBackground: string;
  colorSurface: string;
  colorCard: string;
  colorText: string;
}

export interface ThemeApiModel {
  id: string;
  name: string;
  colorPrimary: string;
  colorSecondary: string;
  fontTitle: string;
  fontBody: string;
  dark: string;  // related entity ID
  light: string; // related entity ID
}
