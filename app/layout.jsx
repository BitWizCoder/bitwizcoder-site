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
  title: "Md. Noman | Product & UI Designer",
  description:
    "I'm a passionate UI Designer with hands-on experience crafting visually appealing and user-friendly interfaces for the web. With a strong foundation in Figma, Adobe Photoshop and Illustrator, I bring creativity and precision to every project.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${fraunces.variable} ${instrumentSans.variable} text-[#615a73]`}>
        {children}
      </body>
    </html>
  );
}
