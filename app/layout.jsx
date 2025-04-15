import "./globals.css";
import { Fraunces, Instrument_Sans } from "next/font/google";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
});

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument-sans",
});

export const metadata = {
  openGraph: {
    title: "Md. Noman | Product & UI Designer",
    description:
      "I'm a passionate UI Designer with hands-on experience crafting visually appealing and user-friendly interfaces for the web. With a strong foundation in Figma, Adobe Photoshop and Illustrator, I bring creativity and precision to every project.",
    url: "https://bitwizcoder.vercel.app/",
    siteName: "Md.Noman",
    images: [
      {
        url: "https://bitwizcoder.vercel.app/OG-image.jpg",
        width: 800,
        height: 600,
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="icon"
          href="/favicon.svg"
          sizes="any"
          type="image/svg+xml"
        ></link>
      </head>
      <body
        className={`${fraunces.variable} ${instrumentSans.variable} text-[#615a73]`}
      >
        {children}
      </body>
    </html>
  );
}
