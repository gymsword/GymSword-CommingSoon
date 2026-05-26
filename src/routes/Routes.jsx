import React from "react";

import { Route } from "react-router-dom";

// LAYOUT
import Layout from "../components/Layout";

// PAGES
import Home from "../pages/Home";
import Men from "../pages/Men";
import Women from "../pages/Women";
import ProductDetails from "../pages/ProductDetails";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Menswear from "../pages/Menswear";
import About from "../pages/About";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Wishlist from "../pages/Wishlist";
import MyAccount from "../pages/MyAccount";
import Orders from "../pages/Orders";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import TermsConditions from "../pages/TermsConditions";
import ContactUs from "../pages/ContactUs";

import FAQs from "../pages/FAQs";
import OrdersDelivery from "../pages/OrdersDelivery";
import ReturnsRefunds from "../pages/ReturnsRefunds";
import PaymentPricing from "../pages/PaymentPricing";

import VerifyEmail from "../components/VerifyEmail";
import ComingSoon from "../pages/ComingSoon";

const AppRoutes = () => {

  return (
    <>

      {/* VERIFY EMAIL */}
      <Route
        path="/verify-email"
        element={<VerifyEmail />}
      />

      {/* WEBSITE LAYOUT */}
      <Route element={<Layout />}>

        {/* HOME */}
        <Route
          path="/"
          element={<Home />}
        />

        {/* COMING SOON */}
        <Route
          path="/commingsoon"
          element={<ComingSoon />}
        />

        {/* MEN */}
        <Route
          path="/men"
          element={<Men />}
        />

        {/* WOMEN */}
        <Route
          path="/women"
          element={<Women />}
        />
        

        {/* PRODUCT DETAILS */}
        <Route
          path="/product/:id"
          element={<ProductDetails />}
        />

        {/* ABOUT */}
        <Route
          path="/about"
          element={<About />}
        />

        {/* CONTACT */}
        <Route
          path="/contact"
          element={<ContactUs />}
        />

        {/* FAQS */}
        <Route
          path="/faqs"
          element={<FAQs />}
        />

        {/* ORDERS DELIVERY */}
        <Route
          path="/orders-delivery"
          element={<OrdersDelivery />}
        />

        {/* RETURNS */}
        <Route
          path="/returns-refunds"
          element={<ReturnsRefunds />}
        />

        {/* PAYMENT */}
        <Route
          path="/payment-pricing"
          element={<PaymentPricing />}
        />

        {/* LOGIN */}
        <Route
          path="/login"
          element={<Login />}
        />

        {/* REGISTER */}
        <Route
          path="/register"
          element={<Register />}
        />

        {/* CART */}
        <Route
          path="/cart"
          element={<Cart />}
        />

        {/* CHECKOUT */}
        <Route
          path="/checkout"
          element={<Checkout />}
        />

        {/* MENSWEAR */}
        <Route
          path="/menswear"
          element={<Menswear />}
        />

        {/* WISHLIST */}
        <Route
          path="/wishlist"
          element={<Wishlist />}
        />

        {/* ACCOUNT */}
        <Route
          path="/account"
          element={<MyAccount />}
        />

        {/* ORDERS */}
        <Route
          path="/orders"
          element={<Orders />}
        />

        {/* PRIVACY POLICY */}
        <Route
          path="/privacy-policy"
          element={<PrivacyPolicy />}
        />
        

        {/* TERMS */}
        <Route
          path="/terms-and-conditions"
          element={<TermsConditions />}
        />

      </Route>

    </>
  );
};

export default AppRoutes;