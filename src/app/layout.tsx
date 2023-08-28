import { PropsWithChildren } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import {
  withFetcherSystem,
  withStyledSystem,
} from "@/features/shared/components";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Marketplace",
  description: "Ports and Adapters Marketplace",
};

function RootLayout({ children }: PropsWithChildren) {
  const AppWithChakraUI = withStyledSystem(
    ({ children }: PropsWithChildren) => {
      return <>{children}</>;
    },
    "chakra-ui"
  );

  const AppWithReactQuery = withFetcherSystem(AppWithChakraUI, "react-query");

  return (
    <html lang="en">
      <body className={inter.className}>
        <AppWithReactQuery>{children}</AppWithReactQuery>
      </body>
    </html>
  );
}

export default RootLayout;
