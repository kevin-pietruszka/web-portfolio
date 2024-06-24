import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-primary",
});

let author = "Kevin Pietruszka";
let url = "https://web-portfolio-six-roan.vercel.app/";
let description =
  "Software Engineer from Atlanta, GA who recently graduated from the Georgia Institute of Technology.";

export const metadata: Metadata = {
  title: `${author} | Portfolio`,
  description: description,
  metadataBase: new URL(url),
  creator: author,
  authors: [{ name: author, url: url }],
  keywords: [
    author,
    "Software Engineer",
    "Full-Stack Engineer",
    "Software Developer",
    "Full-Stack Developer",
    "Backend Engineer",
    "Frontend Engineer",
    "Portfolio",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jetbrainsMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
