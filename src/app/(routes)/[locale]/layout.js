import { Montserrat, Lobster } from "next/font/google";
import "../../globals.css";

import ContextWrapper from "@/components/ContextWrapper";
import Footer from "@/components/Footer";

import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { redirect } from "next/navigation";
import NavWrapper from "@/components/nav/NavWrapper";
import { Toaster } from "react-hot-toast";

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

export default async function RootLayout({ children, params }) {
  const { locale } = await params;

  if (!routing.locales.includes(locale)) {
    redirect("/en");
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={`${montserrat.className} `}>
        <NextIntlClientProvider messages={messages}>
          <ContextWrapper>
            <NavWrapper />
            <main className="min-h-[calc(100vh-24px)]"> {children}</main>
            <Footer />
            <Toaster position="top-center" />
          </ContextWrapper>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
