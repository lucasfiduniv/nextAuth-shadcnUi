import type { Metadata } from "next";
import "./globals.css";
import Providers from "./providers/providers";
import ThemeSwitcher from "../components/themeSwitcher";

export const metadata: Metadata = {
  title: "Next Auth",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <ThemeSwitcher/>
          {children}
          </Providers>
      </body>
    </html>
  );
}
