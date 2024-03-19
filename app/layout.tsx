import "./globals.css";
import { Merriweather } from "next/font/google";

const merriweather = Merriweather({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-merriweather",
});

const loadLocalImage = async () => {
  const imageData = await fs.readFile('https://wedding.rtprojex.com/public/images/weddingEvents/lulu.jpg');
  // Process image data
};

export const metadata = {
  title: "Lulu & Farhan - Wedding Invitation",
  description: "Undangan Pernikahan Lulu & Farhan",
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
