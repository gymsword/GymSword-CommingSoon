import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedAdmin = ({ children }) => {

  const adminToken = localStorage.getItem(
    "adminToken"
  );

  // IF NOT LOGGED IN
  if (!adminToken) {

    return <Navigate to="/admin/login" replace />;

  }

  // IF LOGGED IN
  return children;
};

export default ProtectedAdmin;