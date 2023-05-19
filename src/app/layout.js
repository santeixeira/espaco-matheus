import "./globals.css";
import { Vollkorn } from "next/font/google";
import Navbar from "@/components/Navbar";

const vollkorn = Vollkorn({ subsets: ["latin"] });

export const metadata = {
  title: "Matheus Carneiro",
  description: "Portfolio sobre os trabalho artisticos de Matheus Carneiro",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={vollkorn.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
