import React from "react";

import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

/* POPUP */
import WelcomePopup from "./components/WelcomePopup";

/* SCROLL */
import ScrollToTop from "./components/ScrollToTop";

/* WEBSITE ROUTES */
import AppRoutes from "./routes/Routes";

/* ADMIN */
import Login from "./admin/pages/Login";
import Dashboard from "./admin/pages/Dashboard";
import Products from "./admin/pages/Products";
import Orders from "./admin/pages/Orders";
import Users from "./admin/pages/Users";
import Payments from "./admin/pages/Payments";
import Analytics from "./admin/pages/Analytics";
import Settings from "./admin/pages/Settings";

import ProtectedAdmin from "./admin/components/ProtectedAdmin";

function App() {

  return (
    <>

      {/* SCROLL TOP */}
      <ScrollToTop />

      {/* POPUP */}
      <WelcomePopup />

      <Routes>

        {/* WEBSITE ROUTES */}
        {AppRoutes()}

        {/* ADMIN ROOT */}
        <Route
          path="/admin"
          element={
            <Navigate to="/admin/login" />
          }
        />

        {/* ADMIN LOGIN */}
        <Route
          path="/admin/login"
          element={<Login />}
        />

        {/* DASHBOARD */}
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedAdmin>
              <Dashboard />
            </ProtectedAdmin>
          }
        />

        {/* PRODUCTS */}
        <Route
          path="/admin/products"
          element={
            <ProtectedAdmin>
              <Products />
            </ProtectedAdmin>
          }
        />

        {/* ORDERS */}
        <Route
          path="/admin/orders"
          element={
            <ProtectedAdmin>
              <Orders />
            </ProtectedAdmin>
          }
        />

        {/* USERS */}
        <Route
          path="/admin/users"
          element={
            <ProtectedAdmin>
              <Users />
            </ProtectedAdmin>
          }
        />

        {/* PAYMENTS */}
        <Route
          path="/admin/payments"
          element={
            <ProtectedAdmin>
              <Payments />
            </ProtectedAdmin>
          }
        />

        {/* ANALYTICS */}
        <Route
          path="/admin/analytics"
          element={
            <ProtectedAdmin>
              <Analytics />
            </ProtectedAdmin>
          }
        />

        {/* SETTINGS */}
        <Route
          path="/admin/settings"
          element={
            <ProtectedAdmin>
              <Settings />
            </ProtectedAdmin>
          }
        />

      </Routes>

    </>
  );
}

export default App;