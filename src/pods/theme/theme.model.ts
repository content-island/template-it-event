export interface ThemeVariantModel {
  colorPrimary: string;
  colorSecondary: string;
  fontTitle: string;
  fontBody: string;
  colorBackground: string;
  colorSurface: string;
  colorCard: string;
  colorText: string;
}

export interface ThemeModel {
  dark: ThemeVariantModel | null;
  light: ThemeVariantModel | null;
}

export enum Theme {
  Dark = "event-template",
  Light = "event-template-light",
}
