"use client";

import { useEffect } from "react";
import { useUserStore } from "@/store/user-store";
import { usePathname } from "next/navigation";

export function UserProvider({ children }: { children: React.ReactNode }) {
  const fetchUserData = useUserStore((state) => state.fetchUserData);
  const pathname = usePathname();

  useEffect(() => {
    // Only fetch user data if not on auth pages
    // Add a small delay to ensure cookies are available after redirect
    if (!pathname?.startsWith('/auth')) {
      const timer = setTimeout(() => {
        fetchUserData();
      }, 100); // Small delay to ensure cookies are set after redirect

      return () => clearTimeout(timer);
    }
  }, [fetchUserData, pathname]);

  return <>{children}</>;
}

