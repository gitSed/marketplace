import { PropsWithChildren } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { withStyledSystem } from "@/features/shared/components";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Marketplace",
  description: "Ports and Adapters Marketplace",
};

function RootLayout({ children }: PropsWithChildren) {
  const AppWithStyledSystem = withStyledSystem(
    ({ children }: PropsWithChildren) => {
      return <>{children}</>;
    },
    "chakra-ui"
  );

  return (
    <html lang="en">
      <body className={inter.className}>
        <AppWithStyledSystem>{children}</AppWithStyledSystem>
      </body>
    </html>
  );
}

export default RootLayout;
