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
import Coupon from "./pages/Coupon/Coupon";
import Cashback from "./pages/Cashback/Cashback";
import PrizeDraw from "./pages/PrizeDraw/PrizeDraw";
import OnCardoffer from "./pages/OnCardOffer/OnCardOffer";
import About from "./pages/About/About";

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
        <Route path="/coupon" element={<Coupon />} />
        <Route path="/cashback" element={<Cashback />} />
        <Route path="/prizedraw" element={<PrizeDraw />} />
        <Route path="/oncardOffer" element={<OnCardoffer />} />
        <Route path="/about" element={<About />} />

      </Routes>
      <Footer />
    </React.Fragment>
  );
};

export default RouterApp;
