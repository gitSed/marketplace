"use client";
import { ChakraBaseProvider } from "@chakra-ui/react";

import { ChakraUIThemeProps } from "./chakra-ui.types";

function ChakraUITheme(props: ChakraUIThemeProps) {
  const { children, theme } = props;

  return (
    <ChakraBaseProvider theme={theme}>
      <>{children}</>
    </ChakraBaseProvider>
  );
}

export default ChakraUITheme;
