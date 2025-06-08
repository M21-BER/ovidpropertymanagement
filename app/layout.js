import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";
import "keen-slider/keen-slider.min.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
const cormorant_garamond = Cormorant_Garamond({
  variable: "--font-cormorant_garamond",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
});

export const metadata = {
  title: "OVID Property Management & Title Deed Services",
  description:
    "OVID Property Management & Title Deed Services in Addis Ababa provides expert HOA management, rental and commercial property oversight, real estate sales, leasing, and secure title deed services — delivering transparency, professionalism, and peace of mind.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body
        className={`${cormorant_garamond.variable} ${jost.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
