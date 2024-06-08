// src/theme/index.js
import { extendTheme } from '@chakra-ui/react';

const customTheme = extendTheme({
  styles: {
    global: {
      "html, body": {
        color: "gray.600",
        lineHeight: "tall",
      },
      a: {
        color: "teal.500",
      },
    },
  },
  colors: {
    primary: {
      50: "#e4f9f5",
      100: "#c1ebe1",
      200: "#9ddfd0",
      300: "#79d2bf",
      400: "#55c6ae",
      500: "#3bad94",
      600: "#2c8373",
      700: "#1e5a52",
      800: "#103231",
      900: "#001b1a",
    },
  },
  fonts: {
    heading: "Arial, sans-serif",
    body: "Arial, sans-serif",
  },
});

export default customTheme;
