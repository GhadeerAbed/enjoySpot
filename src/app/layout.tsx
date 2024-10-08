import Footer from '@/layouts/Footer';
import Navbar from '@/layouts/page';
import {NextIntlClientProvider} from 'next-intl';
import {getLocale, getMessages} from 'next-intl/server';
import './globals.css'
 
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
        <NextIntlClientProvider messages={messages}>
        <Navbar />
          <div className="h-screen">{children}</div>
        <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}