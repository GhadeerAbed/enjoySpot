import Footer from "@/layouts/Footer";
import Navbar from "@/layouts/page";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import "./globals.css";
import { Metadata } from "next";
import { getLangDir } from "rtl-detect";

export const metadata: Metadata = {
  title: "EnjoySpot: Book Yachts, Desert Safaris & Watersports in the UAE",
  description:
    "Discover and book top-rated activities in the UAE, from luxury yacht rentals and desert safaris to thrilling watersports. Explore exclusive packages, deals, and adventure experiences at EnjoySpot.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();
  const direction = getLangDir(locale);
  const messages = await getMessages();

  return (
    <html lang={locale} dir={direction}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          <div className="min-h-screen"> {children}</div>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
