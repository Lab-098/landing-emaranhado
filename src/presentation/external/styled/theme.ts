export const theme = {
  colors: {
    white: {
      100: "#FFFFFF",
      200: "#F0F0F0"
    },
    black: {
      0: "#000000"
    },
    yellow: {
      500: "#FFC400",
    },
    orange: {
      500: "#FF8600",
    },
    red: {
      800: "#FF4000",
    },
    blue: {
      500: "#0046FF",
      800: "#003268",
    },
  },
  fonts: {
    primary: "var(--font-geist-sans)",
    secondary: "var(--font-mollie-rocky)",
  },
  fontSize: {
    text_3xs: "1.2rem",
    text_2xs: "1.6rem",
    text_xs: "2rem",
    text_sm: "2.2rem",
    text_md: "2.5rem",
    text_lg: "2.8rem",
    text_xl: "3.5rem",
    text_2xl: "4rem",
    text_3xl: "4.8rem",
    text_4xl: "5.6rem",
    text_5xl: "6.4rem"
  },
  spacing: {
    "1x": "4px",
    "2x": "8px",
    "3x": "12px",
    "4x": "16px",
    "5x": "20px",
    "6x": "24px",
    "7x": "32px",
    "8x": "40px",
    "9x": "48px",
    "10x": "56px",
    "11x": "64px",
    "12x": "72px",
    "13x": "80px",
    "14x": "88px",
    "15x": "96px",
    "16x": "104px",
    "17x": "112px",
  },
  elevation: {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    10: 10,
    max: 9999,
  },
  radius: {
    xs: "4px",
    sm: "8px",
    md: "16px",
    xl: "80px",
  },
  media: {
    mobile: "(max-width: 599px)",
    tablet: "(min-width: 599px) and (max-width: 1023px)",
    desktop: "(min-width: 1024px)",
  },
} as const;

export type TTheme = typeof theme; 
