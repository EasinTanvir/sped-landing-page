import { H3 } from "@/index";

import { BiCalendarEvent } from "react-icons/bi";
import { IoHandRightSharp } from "react-icons/io5";

const NewsLetterCard = ({ t }) => {
  return (
    <div className="relative isolate overflow-hidden bg-transparent">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div className="max-w-xl lg:max-w-lg">
            <H3 className="lg:text-4xl sm:text-2xl text-lg font-semibold font-sans tracking-tight text-colors-heading">
              {t("title")}
            </H3>
            <p className="mt-4 sm:text-base text-xs text-colors-text">
              {t("description")}
            </p>
            <div className="mt-6 flex max-w-md gap-x-4">
              <label htmlFor="email-address" className="sr-only">
                {t("emailLabel")}
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                required
                placeholder={t("emailPlaceholder")}
                autoComplete="email"
                className="min-w-0 flex-auto rounded-md bg-gray-100 px-3.5 py-3 text-sm text-gray-900 outline-none placeholder:text-gray-500"
              />
              <button
                type="submit"
                className="flex-none rounded-md bg-colors-button px-3.5 py-2.5 text-sm font-semibold text-white shadow-md"
              >
                {t("button")}
              </button>
            </div>
          </div>

          <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-indigo-100 p-2 ring-1 ring-indigo-300">
                <BiCalendarEvent className="size-6 text-indigo-600" />
              </div>
              <dt className="mt-4 text-base font-semibold text-colors-heading">
                {t("weeklyTitle")}
              </dt>
              <dd className="mt-2 sm:text-base text-xs text-colors-text">
                {t("weeklyDescription")}
              </dd>
            </div>

            <div className="flex flex-col items-start">
              <div className="rounded-md bg-green-100 p-2 ring-1 ring-green-300">
                <IoHandRightSharp className="size-6 text-green-600" />
              </div>
              <dt className="mt-4 sm:text-base text-xs font-semibold text-colors-heading">
                {t("noSpamTitle")}
              </dt>
              <dd className="mt-2 sm:text-base text-xs text-colors-text">
                {t("noSpamDescription")}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default NewsLetterCard;
