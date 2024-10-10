import Footer from '@/layouts/Footer';
import Navbar from '@/layouts/page';
import {NextIntlClientProvider} from 'next-intl';
import {getLocale, getMessages} from 'next-intl/server';
import './globals.css'
import {NextUIProvider} from '@nextui-org/react'

 
export default async function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();
 
  const messages = await getMessages();
 
  return (
    <html lang={locale}>
      <body>
      <NextUIProvider>
        <NextIntlClientProvider messages={messages}>
        <Navbar />
          {children}
        <Footer />
        </NextIntlClientProvider>
        </NextUIProvider>
      </body>
    </html>
  );
}