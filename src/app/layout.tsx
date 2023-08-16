import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Navbar, withStyledSystem } from "@/features/shared/components";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Marketplace",
  description: "Ports and Adapters Marketplace",
};

function App({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}

function RootLayout({ children }: { children: React.ReactNode }) {
  const AppWithStyledSystem = withStyledSystem(App, "chakra-ui");

  return (
    <html lang="en">
      <body className={inter.className}>
        <AppWithStyledSystem>{children}</AppWithStyledSystem>
      </body>
    </html>
  );
}

export default RootLayout;
