import React from "react";
import Banner from "./Banner";
import TopSellers from "./TopSellers";
import Recommend from "./Recommend";
import News from "./News";
import Footer from "../../components/Footer";
const Home = () => {
  return (
    <>
      <Banner />
      <TopSellers />
      <Recommend />
      <News />
      <Footer />
    </>
  );
};

export default Home;
