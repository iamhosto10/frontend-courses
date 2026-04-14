import { create } from 'zustand';
import Cookies from 'js-cookie';

interface AuthState {
  token: string | null;
  role: 'estudiante' | 'profesor' | null;
  login: (token: string, role: 'estudiante' | 'profesor') => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  token: Cookies.get('token') || null,
  role: (Cookies.get('role') as 'estudiante' | 'profesor') || null,
  login: (token, role) => {
    Cookies.set('token', token, { expires: 7 }); // Expires in 7 days
    Cookies.set('role', role, { expires: 7 });
    set({ token, role });
  },
  logout: () => {
    Cookies.remove('token');
    Cookies.remove('role');
    set({ token: null, role: null });
  },
}));
