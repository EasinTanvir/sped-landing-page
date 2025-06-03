import { useLocale } from "next-intl";
import { useState } from "react";
import { FaGlobe } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { routing, usePathname, useRouter } from "@/i18n/routing";
import { useParams } from "next/navigation";

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();

  const currentLocale = useLocale();
  const [isOpen, setIsOpen] = useState(false);

  const switchLanguage = (locale) => {
    router.replace({ pathname, params }, { locale, scroll: false });
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        className="flex items-center gap-2 px-4 py-2 text-white bg-colors-button rounded-lg hover:opacity-75 transition"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FaGlobe size={18} />
        <span>
          {routing.locales
            .find((lang) => lang === currentLocale || "")
            ?.toUpperCase()}
        </span>
        <IoIosArrowDown size={14} />
      </button>

      {isOpen && (
        <ul className="absolute left-0 mt-2 w-32 bg-white shadow-lg rounded-lg overflow-hidden">
          {routing.locales.map((lang) => (
            <li
              key={lang}
              className={`px-4 py-2 text-sm cursor-pointer hover:bg-gray-100 font-semibold`}
              onClick={() => switchLanguage(lang)}
            >
              {lang?.toUpperCase()}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
