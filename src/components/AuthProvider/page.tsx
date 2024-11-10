"use client"
import {
  useContext,
  createContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { useRouter } from "next/navigation";
import { usePathname} from "next/navigation";


interface AuthContextType {
  isAuthenticated: boolean;
  setIsAuthenticated: (value: boolean) => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();
  const pathname = usePathname()

  useEffect(() => {
    const authData = localStorage.getItem("authData");
    if (authData) {
      setIsAuthenticated(true);
      if (pathname === '/' || pathname === '/login') {
        router.push('/dashboard');
      }
    } else if (pathname !== "/" && pathname !== "/login") {
      router.push("/");
    }
  }, [pathname, router]);
  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
