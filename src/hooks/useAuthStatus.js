import { useSession } from "next-auth/react";

export function useAuthStatus() {
  const { data: session, status } = useSession();

  const isLoading = status === "loading";
  const isAuthenticated = status === "authenticated";
  const isUnauthenticated = status === "unauthenticated";

  return {
    isLoading,
    isAuthenticated,
    isUnauthenticated,
    session,
  };
}
