import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import { supabase } from "../supabase";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Get Current User
    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user);
    });

    // Listen Auth Changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(
      (_, session) => {
        setUser(session?.user || null);
      }
    );

    return () => subscription.unsubscribe();
  }, []);

  // Logout
  const logout = async () => {
    await supabase.auth.signOut();
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () =>
  useContext(AuthContext);