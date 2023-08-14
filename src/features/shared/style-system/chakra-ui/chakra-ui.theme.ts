import { extendTheme } from "@chakra-ui/react";

// foundations
import breakpoints from "./theme-foundations/breakpoints";
import colors from "./theme-foundations/colors";
import shadows from "./theme-foundations/shadows";
import textStyles from "./theme-foundations/textStyles";

const defaultTheme: Record<string, any> = {
  breakpoints,
  colors,
  shadows,
  textStyles,
};

export const overrideTheme = (
  customTheme: Record<string, any> = {}
): Record<string, any> => {
  const theme = { ...defaultTheme, ...customTheme };

  return extendTheme(theme);
};
