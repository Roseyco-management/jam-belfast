import type { Metadata } from "next";
import { Playfair_Display, Roboto } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
  display: "swap",
});

const sigmarOne = localFont({
  src: "../../public/fonts/SigmarOne-Regular.ttf",
  variable: "--font-sigmar",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jam Belfast | Cafe & Restaurant | Corporate Catering Belfast",
  description: "Jam Belfast - Quality cafe, restaurant and corporate catering in Belfast. Located in Park Centre, Donegall Road. Fresh food prepared on premises daily.",
  keywords: "cafe belfast, restaurant belfast, corporate catering belfast, jam belfast, park centre",
  openGraph: {
    title: "Jam Belfast | Cafe & Restaurant",
    description: "Quality cafe, restaurant and corporate catering in Belfast",
    type: "website",
    locale: "en_GB",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${roboto.variable} ${sigmarOne.variable}`}>
      <body className="antialiased font-sans">
        <SmoothScroll>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
