import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";
import "keen-slider/keen-slider.min.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Head from "./components/Head";
import FaviconSwitcher from "./components/FaviconSwitcher";
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
      <Head />
      <body
        className={`flex min-h-screen flex-col ${cormorant_garamond.variable} ${jost.variable} antialiased`}
      >
        <FaviconSwitcher />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
