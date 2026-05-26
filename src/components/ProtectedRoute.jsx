import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function ProtectedRoute({ children }) {
  const auth = useAuth();

  if (!auth) {
    return <Navigate to="/login" />;
  }

  const { user } = auth;

  // 🔐 If not logged in → redirect
  if (!user) {
    return <Navigate to="/login" />;
  }

  // ✅ If logged in → show page
  return children;
}