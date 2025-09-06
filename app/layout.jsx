import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Emerging Crypto - Bitcoin, Ethereum, Tokens, Cryptocurrency",
  description:
    "Emerging Crypto - Bitcoin, Ethereum, Tokens, Cryptocurrency, New Tech, Top Projects, Defi, Events, New Crypto, Politics and Crypto.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className=" overflow-x-hidden">{children}</body>
    </html>
  );
}
