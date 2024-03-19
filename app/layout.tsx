import "./globals.css";
import { Merriweather } from "next/font/google";

const merriweather = Merriweather({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-merriweather",
});

export const metadata = ({
  title: "Lulu & Farhan - Wedding Invitation",
  description: "Undangan Pernikahan Lulu & Farhan",
  images: [
      {
        url: 'https://lf.rtprojex.com/public/images/weddingEvents/lulu.jpg',
        width: 1800,
        height: 1600,
        alt: 'Thumbnail',
      },
      ],
});

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
