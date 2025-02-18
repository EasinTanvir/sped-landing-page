import { usePathname, useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import { useState } from "react";
import { FaGlobe } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

const languages = [
  { code: "en", label: "English" },
  { code: "fi", label: "Finland" },
];

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();
  const [isOpen, setIsOpen] = useState(false);

  const switchLanguage = (locale) => {
    const newPath = `/${locale}${pathname.replace(/^\/(en|fi)/, "")}`;
    router.push(newPath);
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
          {languages.find((lang) => lang.code === currentLocale)?.label}
        </span>
        <IoIosArrowDown size={14} />
      </button>

      {isOpen && (
        <ul className="absolute left-0 mt-2 w-32 bg-white shadow-lg rounded-lg overflow-hidden">
          {languages.map((lang) => (
            <li
              key={lang.code}
              className={`px-4 py-2 text-sm cursor-pointer hover:bg-gray-100 ${
                lang.code === currentLocale ? "font-bold" : ""
              }`}
              onClick={() => switchLanguage(lang.code)}
            >
              {lang.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
