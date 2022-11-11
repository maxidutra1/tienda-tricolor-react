import React from "react";
import Hero from "../Components/Hero/Hero";
import { ProductsContainer } from "../Components/Products/ProductsContainer";
import { CustomInput } from "../Components/CustomInput/CustomInput";

const Home = () => {
  return (
    <>
      <Hero></Hero>
      <CustomInput />
      <ProductsContainer />
    </>
  );
};

export default Home;
