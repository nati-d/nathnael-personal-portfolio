export interface UserData {
  id?: number;
  email?: string;
  first_name?: string;
  last_name?: string;
  [key: string]: any;
}

export interface UserStore {
  userData: UserData | null;
  loading: boolean;
  error: string | null;
  fetchUserData: () => Promise<void>;
  setUserData: (data: UserData | null) => void;
  clearUserData: () => void;
}

