"use client";

import { useAuthStatus } from "@/hooks/useAuthStatus";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

const defaultConsent = {
  necessary: true,
  analytics: true,
  preferences: true,
  marketing: false,
  ad_user_data: false,
  ad_personalization: false,
};

export default function CookieConsent() {
  const { isAuthenticated: isLoggedIn, isLoading, session } = useAuthStatus();
  console.log("isLoggedIn", isLoggedIn);
  const [visible, setVisible] = useState(false);
  const [consent, setConsent] = useState(defaultConsent);

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const savedConsent = localStorage.getItem("consentMode");

    // If no consent saved, show banner

    if (!savedConsent) {
      setVisible(true);
    } else {
      // Restore consent to gtag
      const parsed = JSON.parse(savedConsent);
      if (typeof window !== "undefined" && typeof window.gtag === "function") {
        window.gtag("consent", "default", parsed);
      }

      // Sync UI state with parsed consent
      setConsent({
        necessary: true,
        analytics: parsed.analytics_storage === "granted",
        preferences: parsed.personalization_storage === "granted",
        marketing: parsed.ad_storage === "granted",
      });
    }

    // Push user_id if user is logged in
    if (isLoggedIn && typeof window !== "undefined") {
      const userId = localStorage.getItem("userId");
      if (userId && window.dataLayer) {
        window.dataLayer.push({ user_id: userId });
      }
    }
  }, [isLoggedIn]);

  const updateConsent = (updatedConsent) => {
    const consentMode = {
      functionality_storage: updatedConsent.necessary ? "granted" : "denied",
      security_storage: updatedConsent.necessary ? "granted" : "denied",
      analytics_storage: updatedConsent.analytics ? "granted" : "denied",
      personalization_storage: updatedConsent.preferences
        ? "granted"
        : "denied",
      ad_storage: updatedConsent.marketing ? "granted" : "denied",
      ad_user_data: updatedConsent.ad_user_data ? "granted" : "denied",
      ad_personalization: updatedConsent.ad_personalization
        ? "granted"
        : "denied",
    };

    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("consent", "update", consentMode);
    }

    localStorage.setItem("consentMode", JSON.stringify(consentMode));
    setVisible(false);
  };

  const handleAcceptAll = () => {
    const allGranted = {
      necessary: true,
      analytics: true,
      preferences: true,
      marketing: true,
      ad_user_data: true,
      ad_personalization: true,
    };
    setConsent(allGranted);
    updateConsent(allGranted);
  };

  const handleRejectAll = () => {
    const allDenied = {
      necessary: false,
      analytics: false,
      preferences: false,
      marketing: false,
    };
    setConsent(allDenied);
    updateConsent(allDenied);
  };

  const handleAcceptSome = () => {
    updateConsent(consent);
  };
  const t = useTranslations("cookie");

  if (!visible) return null;

  return (
    <>
      {(visible || showModal) && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-[999]" />
      )}
      {visible && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg z-[999] p-4">
          <div className=" w-full flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6">
            {/* Left: Text */}
            <p className="text-sm text-gray-700 text-center md:text-left flex-1">
              {t("cookie_banner_text")}
            </p>

            {/* Right: Buttons */}
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-3">
              <button
                onClick={() => setShowModal(true)}
                className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded transition"
              >
                {t("manage")}
              </button>

              <button
                onClick={handleRejectAll}
                className="bg-red-500 hover:bg-red-600 text-white text-sm px-4 py-2 rounded transition"
              >
                {t("reject_all")}
              </button>

              <button
                onClick={handleAcceptAll}
                className="bg-green-600 hover:bg-green-700 text-white text-sm px-4 py-2 rounded transition"
              >
                {t("accept_all")}
              </button>
            </div>
          </div>
        </div>
      )}

      {showModal && (
        <>
          {/* Backdrop */}
          <div className="fixed inset-0 bg-black bg-opacity-50 z-[999]" />

          {/* Modal */}
          <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4">
            <div className="bg-white rounded-xl max-w-lg w-full p-6 shadow-2xl relative">
              {/* Modal Title */}
              <h2 className="text-xl font-semibold text-gray-800 mb-5">
                {t("cookie_preferences")}
              </h2>

              {/* Cookie Preferences */}
              <div className="space-y-3 text-sm text-gray-700">
                <label className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked
                    disabled
                    className="accent-blue-600 cursor-not-allowed"
                  />
                  {t("necessary")}
                </label>
                <label className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={consent.analytics}
                    onChange={(e) =>
                      setConsent((prev) => ({
                        ...prev,
                        analytics: e.target.checked,
                      }))
                    }
                    className="accent-blue-600"
                  />
                  {t("analytics_cookies")}
                </label>
                <label className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={consent.preferences}
                    onChange={(e) =>
                      setConsent((prev) => ({
                        ...prev,
                        preferences: e.target.checked,
                      }))
                    }
                    className="accent-blue-600"
                  />
                  {t("preferences")}
                </label>
                <label className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={consent.marketing}
                    onChange={(e) =>
                      setConsent((prev) => ({
                        ...prev,
                        marketing: e.target.checked,
                      }))
                    }
                    className="accent-blue-600"
                  />
                  {t("marketing_cookies")}
                </label>
                <label className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={consent.ad_user_data}
                    onChange={(e) =>
                      setConsent((prev) => ({
                        ...prev,
                        ad_user_data: e.target.checked,
                      }))
                    }
                    className="accent-blue-600"
                  />
                  {t("ad_user_data")}
                </label>
                <label className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={consent.ad_personalization}
                    onChange={(e) =>
                      setConsent((prev) => ({
                        ...prev,
                        ad_personalization: e.target.checked,
                      }))
                    }
                    className="accent-blue-600"
                  />
                  {t("ad_personalization")}
                </label>
              </div>

              {/* Modal Actions */}
              <div className="mt-6 flex justify-end gap-3">
                <button
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 text-sm bg-gray-100 text-gray-800 rounded-md hover:bg-gray-200 transition"
                >
                  {t("cancel")}
                </button>
                <button
                  onClick={() => {
                    handleAcceptSome();
                    setShowModal(false);
                  }}
                  className="px-4 py-2 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
                >
                  {t("save_preferences")}
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
