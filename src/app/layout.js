import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

export const metadata = {
  title: "Welcome Itzfizz | Scroll-Driven Hero",
  description:
    "A scroll-driven hero animation built with Next.js, Tailwind CSS and GSAP ScrollTrigger.",
};

export const viewport = {
  themeColor: "#d1d1d1",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={geist.variable}>
      <body>{children}</body>
    </html>
  );
}
