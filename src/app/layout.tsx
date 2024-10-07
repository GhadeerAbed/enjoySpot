
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../layouts/page";
import Footer from "../layouts/Footer";



export const metadata: Metadata = {
  title: "ENJOY SPOT",
  description:
    "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
          <Navbar/>
          <div className="h-screen">{children}</div>
          <Footer/>
      </body>
    </html>
  );
}
