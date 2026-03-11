export interface ThemeModeModel {
  colorBackground: string;
  colorSurface: string;
  colorCard: string;
  colorText: string;
}

export interface ThemeModel {
  name: string;
  colorPrimary: string;
  colorSecondary: string;
  fontTitle: string;
  fontBody: string;
  dark: ThemeModeModel | null;
  light: ThemeModeModel | null;
}

export enum Theme {
  Dark = "event-template",
  Light = "event-template-light",
}
