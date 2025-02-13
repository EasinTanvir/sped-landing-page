import { Montserrat, Lobster } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/nav/Navbar";
import ContextWrapper from "@/components/ContextWrapper";

const montserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});
export const lobster = Lobster({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin", "cyrillic", "cyrillic-ext", "latin-ext"],
});

export const metadata = {
  title: "SwiftDrop",
  description: "Fatest Delivery In The Town",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} `}>
        <ContextWrapper>
          <Navbar />
          <main> {children}</main>
        </ContextWrapper>
      </body>
    </html>
  );
}
