import React from "react";
import type { Viewport } from "next";
import { Inter } from "next/font/google";
import { defaultMetadata } from "@/src/metadata";
import { AppProviders } from "@/src/providers";
import { Header } from "@/src/components/Header";
import { Footer } from "@/src/components/Footer";
import { GoogleAnalytics } from "@/src/providers/GoogleAnalytics";
import "@/src/styles/global.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["cyrillic"],
});

export const metadata = defaultMetadata;

export const viewport: Viewport = {
  themeColor: "#810CA8",
};

const RootLayout = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => (
  <html lang="en">
    {process.env.NODE_ENV === "production" && <GoogleAnalytics />}
    <body
      className={`min-h-[100dvh] w-full ${inter.variable} flex flex-col items-center justify-start font-inter text-wizard-black`}
    >
      <AppProviders>
        <Header />
        <main className="w-[1227px] flex-1 justify-center pt-14 max-lg:w-[1000px] max-md:w-full max-md:px-4">
          {children}
        </main>
        <Footer />
      </AppProviders>
    </body>
  </html>
);

export default RootLayout;
