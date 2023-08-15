import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Navbar, StyleSystemProvider } from "@/features/shared/components";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Marketplace",
  description: "Ports and Adapters Marketplace",
};

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StyleSystemProvider system="chakra-ui">
          <Navbar />
          {children}
        </StyleSystemProvider>
      </body>
    </html>
  );
}

export default RootLayout;
