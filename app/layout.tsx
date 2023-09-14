import NavbarBottom from "@/components/NavbarBottom";
import "./globals.css";
import type { Metadata } from "next";
import { PT_Sans } from "next/font/google";
import localFont from "next/font/local";

const pt_sans = PT_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-pt-sans",
});

const font_3d_isometric = localFont({
  src: [
    { path: "./3DIsometric.ttf", weight: "400" },
    { path: "./3DIsometricBold.ttf", weight: "700" },
    { path: "./3DIsometricBlack.ttf", weight: "900" },
  ],
  variable: "--font-3d-isometric",
});

export const metadata: Metadata = {
  title: "Silver Wolf Database",
  description: "A Honkai Star Rail Database",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${pt_sans.variable} ${font_3d_isometric.variable}`}
    >
      <body className="pb-10 text-xs">
        {/* Navbar */}
        <NavbarBottom />
        <main>{children}</main>
      </body>
    </html>
  );
}
