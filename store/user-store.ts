import { create } from 'zustand';
import { getUserData } from '@/app/actions/auth';
import type { UserStore, UserData } from '@/types/user-types';

export const useUserStore = create<UserStore>((set) => ({
  userData: null,
  loading: false,
  error: null,
  
  fetchUserData: async () => {
    set({ loading: true, error: null });
    try {
      const data = await getUserData();
      set({ userData: data, loading: false, error: null });
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to load user data';
      set({ 
        userData: null, 
        loading: false, 
        error: errorMessage 
      });
    }
  },
  
  setUserData: (data: UserData | null) => {
    set({ userData: data });
  },
  
  clearUserData: () => {
    set({ userData: null, error: null });
  },
}));

