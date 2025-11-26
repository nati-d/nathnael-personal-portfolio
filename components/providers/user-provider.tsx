"use client";

import { useEffect } from "react";
import { useUserStore } from "@/store/user-store";

export function UserProvider({ children }: { children: React.ReactNode }) {
  const fetchUserData = useUserStore((state) => state.fetchUserData);

  useEffect(() => {
    // Fetch user data on mount
    fetchUserData();
  }, [fetchUserData]);

  return <>{children}</>;
}

