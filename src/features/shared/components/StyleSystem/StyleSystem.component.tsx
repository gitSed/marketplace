import dynamic from "next/dynamic";

import { IStyleSystemProps } from "./StyleSystem.types";

const StyleSystemComponents = {
  "chakra-ui": {
    component: dynamic(() =>
      import("./chakra-ui").then((mod) => mod.ChakraUIProvider)
    ),
  },
};

function StyleSystemProvider(props: IStyleSystemProps) {
  const { children, system } = props;

  const Component = StyleSystemComponents[system]?.component || "div";

  return <Component>{children}</Component>;
}

export default StyleSystemProvider;
