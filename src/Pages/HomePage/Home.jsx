import React from "react";
import Banner from "./Banner/Banner";
import Work from "./Work/Work";
import Services from "./Services/Services";
import Brands from "./Brands/Brands";
import Method from "./Method/Method";
import Moto from "./Moto/Moto";
import Reviews from "./Reviews/Reviews";
import { Suspense } from "react";

const Home = () => {
  const reviewPromise = fetch("/reviews.json").then((res) => res.json());
  return (
    <div>
      <Banner></Banner>
      <Work></Work>
      <Services></Services>
      <Brands></Brands>
      <Method></Method>
      <Moto></Moto>
      <Suspense fallback={<p>Loading reviews...</p>}>
        <Reviews reviewPromise={reviewPromise} />
      </Suspense>
    </div>
  );
};

export default Home;
