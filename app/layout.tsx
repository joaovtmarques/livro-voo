import "./globals.css";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";

import Favicon from "/public/Metadata/favicon.ico";
import Header from "./_components/header";
import Footer from "./_components/footer";

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Livro de Voo - 6º BIL",
  description: "Livro de Voo do 6º Batalhão de Infantaria Leve (Aeromóvel)",
  icons: [{ rel: "icon", url: Favicon.src }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={openSans.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
