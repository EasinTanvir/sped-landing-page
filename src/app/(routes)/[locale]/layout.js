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
import SessionPrivider from "@/Providers/SessionPrivider";
import Script from "next/script";
import CookieConsent from "@/components/CookieConsent/CookieConsent";

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
  title: "Ravintola Sinet",
  description: "Fatest Delivery In The Town",
};

export default async function RootLayout({ children, params }) {
  const { locale } = await params;

  if (!routing.locales.includes(locale)) {
    redirect("/en");
  }

  const messages = await getMessages();

  const res = await fetch(process.env.BASE_URL + "/api/admin/brand-setting");
  const brandSetting = await res.json();

  return (
    <html lang={locale}>
      <head>
        <Script id="consent-defaults" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}

            // Check localStorage for consentMode
            if (localStorage.getItem('consentMode') === null) {
              gtag('consent', 'default', {
                'ad_storage': 'denied',
                'analytics_storage': 'denied',
                'personalization_storage': 'denied',
                'functionality_storage': 'denied',
                'ad_user_data': 'denied',
                'ad_personalization': 'denied',
                'security_storage': 'granted'
              });
            } else {
              gtag('consent', 'default', JSON.parse(localStorage.getItem('consentMode')));
            }
          `}
        </Script>

        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-5WXD3CXN');
          `}
        </Script>
      </head>
      <body className={`${montserrat.className} `}>
        <NextIntlClientProvider messages={messages}>
          <SessionPrivider>
            <ContextWrapper>
              <NavWrapper brandSetting={brandSetting?.data} />
              <main className="min-h-[calc(100vh-24px)]"> {children}</main>
              <Footer brandSetting={brandSetting?.data} />
              <Toaster position="top-center" />
              <CookieConsent />
            </ContextWrapper>
          </SessionPrivider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
