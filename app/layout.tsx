import "./globals.css";
import { Merriweather } from "next/font/google";

const merriweather = Merriweather({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-merriweather",
});

export const metadata = {
  openGraph: {
    title: 'Lulu & Farhan - Wedding Invitation',
    description: 'Undangan Pernikahan Lulu & Farhan',
    url: 'https://lf.rtprojex.com',
    siteName: 'Next.js',
    images: [
      {
        url: '/images/weddingEvents/lulu.jpg', // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: '/images/weddingEvents/lulu.jpg', // Must be an absolute URL
        width: 1800,
        height: 1600,
        alt: 'My custom alt',
      },
    ],
    locale: 'en_US',
    type: 'website',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${merriweather.className} bg-black overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
