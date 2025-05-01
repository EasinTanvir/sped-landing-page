"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { BiLogOut } from "react-icons/bi";
import { signOut, useSession } from "next-auth/react";
import { useParams } from "next/navigation";
import { useRouter } from "@/i18n/routing";

import { useGlobalContext } from "@/contextStore/GlobalContext";
import { MdAdminPanelSettings } from "@/utils/icons";
import { Icon, H1, Button } from "../../..";
import AdminLink from "./AdminLink";
import ToggleIcon from "./ToggleIcon";
import useAdminNavigation from "@/hooks/useAdminNavigation";

const AdminSidebar = () => {
  const { openNav, dashBoardSideBar } = useGlobalContext();
  const adminNavigation = useAdminNavigation();

  const heading = useTranslations("admin");
  const { locale } = useParams();
  const router = useRouter();

  const logoutHandler = async () => {
    const data = await signOut({
      redirect: false,
      callbackUrl: `/${locale}/login`,
    });
    router.push(data.url);
  };

  return (
    <div
      className={`fixed  top-0 min-h-screen max-h-screen  bg-black shadow-lg shadow-black transition-all duration-200 ${
        dashBoardSideBar ? "w-64" : "w-[78px]"
      }   py-6 px-4  ${openNav ? "" : "z-20"}`}
    >
      <div className="flex justify-center items-center gap-2 ">
        <Icon className="text-white" icon={MdAdminPanelSettings} size={35} />

        <div
          className={`overflow-hidden transition-all duration-200 ${
            dashBoardSideBar
              ? "opacity-100 scale-100 w-auto"
              : "opacity-0 scale-0 w-0"
          }`}
        >
          <H1 className="text-white md:text-2xl text-xl font-bold font-mono italic">
            {heading("title")}
          </H1>
        </div>
      </div>

      <div className="mt-8  space-y-7   ">
        <ToggleIcon />
        <div className="space-y-5">
          {adminNavigation.map((item, index) => (
            <AdminLink
              key={index}
              {...item}
              dashBoardSideBar={dashBoardSideBar}
            />
          ))}
        </div>
      </div>

      <Button
        onClick={logoutHandler}
        className={`fixed ${
          dashBoardSideBar ? "left-10" : "left-4"
        } bottom-4  flex items-center gap-2 p-3 rounded-lg text-white shadow-md transition-all duration-400`}
      >
        <BiLogOut className="w-4 h-4" />
        {dashBoardSideBar && <span> Logout</span>}
      </Button>
    </div>
  );
};

export default AdminSidebar;
