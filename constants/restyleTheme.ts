import { createTheme } from "@shopify/restyle";

const theme = createTheme({
  colors: {
    primary: "#328FCE",
    secondary: "#292D32",
    dark: "#222222",
    success: "#36775F",
    danger: "#FC163F",
    light: "#F5F5F5",
  },
  spacing: {
    XS: 8,
    S: 12,
    M: 16,
    L: 20,
    XL: 24,
  },
  breakpoints: {},
  textVariants: {
    defaults: {
      // We can define a default text variant here.
    },
  },
});

// for dark mode create another theme

export type Theme = typeof theme;

export default theme;
