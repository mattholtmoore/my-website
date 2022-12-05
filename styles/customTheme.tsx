import {
  createTheme,
  PaletteColor,
  PaletteColorOptions,
} from "@mui/material/styles";
import { PraiseGodColors } from "../styles/colors";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    pageTitle: React.CSSProperties;
    tagLine: React.CSSProperties;
    pullQuote: React.CSSProperties;
    d2: React.CSSProperties;
    small: React.CSSProperties;
    heroBody: React.CSSProperties;
    inputText: React.CSSProperties;
    tableHeader: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    pageTitle?: React.CSSProperties;
    tagLine?: React.CSSProperties;
    pullQuote?: React.CSSProperties;
    d2: React.CSSProperties;
    small?: React.CSSProperties;
    heroBody?: React.CSSProperties;
    inputText?: React.CSSProperties;
    tableHeader?: React.CSSProperties;
  }

  interface Palette {
    active: PaletteColor;
    pending: PaletteColor;
    inflight: PaletteColor;
    unhealthy: PaletteColor;
    settled: PaletteColor;
    expired: PaletteColor;
    draft: PaletteColor;
  }

  interface PaletteOptions {
    active: PaletteColorOptions;
    pending: PaletteColorOptions;
    inflight: PaletteColorOptions;
    unhealthy: PaletteColorOptions;
    settled: PaletteColorOptions;
    expired: PaletteColorOptions;
    draft: PaletteColorOptions;
  }
}

declare module "@mui/material/Badge" {
  export interface BadgePropsColorOverrides {
    active: true;
    pending: true;
    inflight: true;
    unhealthy: true;
    settled: true;
    expired: true;
    draft: true;
  }
}
// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    pageTitle: true;
    tagLine: true;
    pullQuote: true;
    d2: true;
    small: true;
    heroBody: true;
    inputText: true;
    tableHeader: true;
  }
}

const customTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 0,
      md: 0,
      lg: 0,
      xl: 1,
    },
  },
  palette: {
    primary: {
      main: PraiseGodColors.SolidSlateMedium,
      dark: PraiseGodColors.SolidSlateDarker,
      light: PraiseGodColors.SolidSlateLighter,
    },
    secondary: {
      main: PraiseGodColors.WarmOrangeMedium,
      light: PraiseGodColors.WarmOrangeLight,
      dark: PraiseGodColors.WarmOrangeDark,
    },
    error: {
      light: PraiseGodColors.RiskBerryLighter,
      main: PraiseGodColors.RiskBerryMedium,
      dark: PraiseGodColors.RiskBerryDarker,
    },
    warning: {
      light: PraiseGodColors.CautionYellowLighter,
      main: PraiseGodColors.CautionYellowMedium,
      dark: PraiseGodColors.CautionYellowDarker,
    },
    info: {
      light: PraiseGodColors.EarthBlueLight,
      main: PraiseGodColors.EarthBlueMedium,
      dark: PraiseGodColors.EarthBlueDark,
    },
    success: {
      light: PraiseGodColors.SecurityGreenLighter,
      main: PraiseGodColors.SecurityGreenMedium,
      dark: PraiseGodColors.SecurityGreenDarker,
    },
    background: {
      paper: PraiseGodColors.StoryWhiteMedium,
    },
    grey: {
      400: PraiseGodColors.SolidSlateMedium,
    },
    active: {
      main: PraiseGodColors.SecurityGreenMedium,
      contrastText: PraiseGodColors.White,
    },
    pending: {
      main: PraiseGodColors.CautionYellowMedium,
      contrastText: PraiseGodColors.White,
    },
    draft: {
      main: PraiseGodColors.EarthBlueMedium,
      contrastText: PraiseGodColors.White,
    },
    inflight: {
      main: PraiseGodColors.ConnectedVioletMedium,
      contrastText: PraiseGodColors.White,
    },
    settled: {
      main: PraiseGodColors.SolidSlateMedium,
      contrastText: PraiseGodColors.White,
    },
    expired: {
      main: PraiseGodColors.SolidSlateMedium,
      contrastText: PraiseGodColors.White,
    },
    unhealthy: {
      main: PraiseGodColors.RiskBerryMedium,
      contrastText: PraiseGodColors.White,
    },
  },
  typography: {
    fontFamily: "SuisseIntl",
    fontSize: 12,
    h1: {
      fontFamily: "SuisseIntlCond",
      fontWeight: 500,
      fontSize: "4rem",
      lineHeight: 1,
      textTransform: "uppercase",
    },
    h2: {
      fontFamily: "SuisseIntlCond",
      fontWeight: 500,
      fontSize: "3rem",
      lineHeight: 1,
    },
    h3: {
      fontFamily: "SuisseIntlCond",
      fontWeight: 500,
      fontSize: "2.5rem",
      lineHeight: 1,
      textTransform: "uppercase",
    },
    h4: {
      fontFamily: "SuisseIntlCond",
      fontWeight: 500,
      fontSize: "2rem",
      lineHeight: 1,
      textTransform: "uppercase",
    },
    h5: {
      fontFamily: "SuisseIntlCond",
      fontWeight: 500,
      fontSize: "1.5rem",
      lineHeight: 4 / 3,
      textTransform: "uppercase",
    },
    h6: {
      fontFamily: "SuisseIntlCond",
      fontWeight: 500,
      fontSize: "1rem",
      lineHeight: 1,
      textTransform: "uppercase",
    },
    pageTitle: {
      fontFamily: "SuisseIntl",
      fontWeight: 700,
      fontSize: "4rem",
      lineHeight: 1.125,
    },
    tagLine: {
      fontFamily: "SuisseSign",
      fontWeight: 100,
      fontSize: "3rem",
      lineHeight: 1,
    },
    pullQuote: {
      fontFamily: "SuisseIntl",
      fontWeight: 700,
      fontSize: "3.5rem",
      lineHeight: 1.3,
    },
    d2: {
      fontFamily: "SuisseIntl",
      fontWeight: 700,
      fontSize: "3rem",
      lineHeight: 1.3,
      letterSpacing: -1,
    },
    heroBody: {
      fontFamily: "SuisseNeue",
      fontWeight: 400,
      fontSize: "1.5rem",
      lineHeight: 1,
    },
    body1: {
      fontFamily: "SuisseNeue",
      fontWeight: 400,
      fontSize: "1rem",
      lineHeight: 1.3,
    },
    body2: {
      fontFamily: "SuisseNeue",
      fontWeight: 400,
      fontSize: "0.875rem",
      lineHeight: "1.125rem",
    },
    caption: {
      fontFamily: "SuisseNeue",
      fontWeight: 500,
      fontSize: "0.8125rem",
      lineHeight: 1.3,
      textTransform: "uppercase",
    },
    small: {
      fontFamily: "SuisseNeue",
      fontWeight: 400,
      fontSize: "0.875rem",
      lineHeight: 1,
    },
    inputText: {
      fontFamily: "SuisseIntlCond",
      fontWeight: 500,
      fontSize: "1rem",
    },
    tableHeader: {
      fontFamily: "SuisseIntl",
      fontWeight: 500,
      fontSize: "0.875rem",
    },
    button: {
      fontFamily: "SuisseIntlCond",
      fontStyle: "normal",
      fontSize: "16px",
      fontWeight: 500,
      lineHeight: "26px",
      letterSpacing: "0.46px",
      textTransform: "uppercase",
    },
  },
});
export default customTheme;

export const customThemeData = {
  columnWidths: {
    desktop: 1152,
  },
};
