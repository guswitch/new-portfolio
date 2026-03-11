import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { SmoothScroll } from '../components/SmoothScroll';
import '@/src/styles/index.css';

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Full Stack Developer Portfolio',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning>
      <body>
        <SmoothScroll />
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
