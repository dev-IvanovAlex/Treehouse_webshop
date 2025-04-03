import React from "react";

import Hero from "./Hero/Hero";
import Welcome from "./Welcome/Welcome";
import OurCare from "./OurCare/OurCare";
import Discount from "./Discount/Discount";
import Slogan from "../../Slogan/Slogan";
import ProductsSlider from "./ProductsSlider/ProductsSlider";
import HomeTrust from "./HomeTrust/HomeTrust";
import ShoppingCategories from "./ShoppingCategories/ShoppingCategories";

const Home = () => {
  return (
    <>
      <Hero />
      <Welcome />
      <OurCare />
      <ShoppingCategories />
      <Discount />
      <Slogan headerText={"BUY LESS, BUY BETTER"} />
      <ProductsSlider />
      <HomeTrust />
    </>
  );
};

export default Home;
