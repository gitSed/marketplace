import dynamic from "next/dynamic";

import { IStyleSystemProps } from "./style-system.types";

const StyleSystemComponents = {
  "chakra-ui": {
    component: dynamic(() =>
      import("./chakra-ui").then((mod) => mod.ChakraUITheme)
    ),
  },
};

function StyleSystemProvider(props: IStyleSystemProps) {
  const { children, system } = props;

  const Component = StyleSystemComponents[system]?.component || "div";

  return <Component>{children}</Component>;
}

export default StyleSystemProvider;
