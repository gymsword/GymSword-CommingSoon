import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter } from "react-router-dom";

import App from "./App";
import "./index.css";

import CartProvider from "./context/CartContext";

// ✅ TOAST
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(
  document.getElementById("root")
).render(

  <React.StrictMode>

    {/* ONLY ONE ROUTER */}
    <BrowserRouter>

      <CartProvider>

        {/* MAIN APP */}
        <App />

        {/* ✅ TOASTER */}
        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              background: "#111",
              color: "#fff",
              border: "1px solid rgba(255,255,255,0.1)",
            },
          }}
        />

      </CartProvider>

    </BrowserRouter>

  </React.StrictMode>
);