import { Montserrat } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/nav/Navbar";
import ContextWrapper from "@/components/ContextWrapper";

const montserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export const metadata = {
  title: "SwiftDrop",
  description: "Fatest Delivery In The Town",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable}  `}>
        <ContextWrapper>
          <Navbar />
          <main> {children}</main>
        </ContextWrapper>
      </body>
    </html>
  );
}
