"use client";
import { ChakraBaseProvider } from "@chakra-ui/react";

import { overrideTheme } from "./chakra-ui.theme";
import { ChakraUIProviderProps } from "./chakra-ui.types";

function ChakraUIProvider(props: ChakraUIProviderProps) {
  const { children, theme } = props;

  return (
    <ChakraBaseProvider theme={overrideTheme(theme)}>
      {children}
    </ChakraBaseProvider>
  );
}

export default ChakraUIProvider;
