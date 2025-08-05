"use client";

import { createContext, useContext, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  const login = async (email, password) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(`${API_URL}/admin/login`, {
        email,
        password,
      });

      const { token, user } = response.data;

      setToken(token);
      setUser(user);
      localStorage.setItem("auth-token", token);
      router.push("/admin/dashboard");
    } catch (err) {
      setError(err?.response?.data?.message || "Login failed");
      throw err; // Needed to catch in component
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("auth-token");
    router.push("/admin/login");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        error,
        loading,
        login,
        logout,
        setError,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
