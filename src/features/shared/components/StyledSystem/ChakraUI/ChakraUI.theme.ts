import { extendTheme } from "@chakra-ui/react";

// foundations
import breakpoints from "./theme-foundations/breakpoints";
import colors from "./theme-foundations/colors";
import shadows from "./theme-foundations/shadows";
import textStyles from "./theme-foundations/textStyles";

// components
import Button from "./theme-components/Button";
import Link from "./theme-components/Link";
import Alert from "./theme-components/Alert";

const defaultTheme: Record<string, unknown> = {
  styles: {
    global: {
      body: {
        bg: "black",
        color: "white",
      },
    },
  },
  breakpoints,
  colors,
  shadows,
  textStyles,
  components: {
    Button,
    Link,
    Alert,
  },
};

export const overrideTheme = (
  customTheme: Record<string, unknown> = {}
): Record<string, unknown> => {
  const theme = { ...defaultTheme, ...customTheme };

  return extendTheme(theme);
};
