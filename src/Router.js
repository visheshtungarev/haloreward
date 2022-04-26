import React, { } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Footer from "./components/Layout/Footer/index"
import AllBrands from "./pages/AllBrands/AllBrands";
import AllPopularOffers from "./pages/PopularOffers/AllPopularOffers";
import Header from "./components/Layout/Header";
import AllOffers from "./pages/AllOffers/AllOffers";
import BrandCategory from "./pages/Brand/BrandCategory";
import BrandDetails from "./pages/OfferListing/BrandDetails";

const RouterApp = () => {

  return (
    <React.Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/all-brands" element={<AllBrands />} />
        <Route path="/popular-offers" element={<AllPopularOffers />} />
        <Route path="/all-offers" element={<AllOffers />} />
        <Route path="/all-brands/category" element={< BrandCategory />} />
        <Route path="/brand" element={<BrandDetails />} />

      </Routes>
      <Footer />
    </React.Fragment>
  );
};

export default RouterApp;
