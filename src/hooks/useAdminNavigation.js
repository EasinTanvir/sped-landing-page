import { useTranslations } from "next-intl";
import {
  FaHome,
  FaImage,
  FaUserTie,
  FaEnvelope,
  MdMenuBook,
  MdMiscellaneousServices,
} from "@/utils/icons";

const useAdminNavigation = () => {
  const t = useTranslations("admin.nav");

  return [
    { name: t("dashboard"), href: "/admin", icon: FaHome },
    { name: t("heroBanner"), href: "/admin/hero-banner", icon: FaImage },
    { name: t("menu"), href: "/admin/menu", icon: MdMenuBook },
    { name: t("todaymenu"), href: "/admin/today-menu", icon: MdMenuBook },
    {
      name: t("service"),
      href: "/admin/service",
      icon: MdMiscellaneousServices,
    },
    { name: t("chefs"), href: "/admin/chefs", icon: FaUserTie },
    { name: t("newsletter"), href: "/admin/newsletter", icon: FaEnvelope },
  ];
};

export default useAdminNavigation;
