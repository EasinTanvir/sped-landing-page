import { authConfig } from "@/app/api/auth/authOptions";
import { getServerSession } from "next-auth";

export const getServerCredentials = async () => {
  return await getServerSession(authConfig);
};
