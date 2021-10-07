import React from "react";
import Banner from "./../../components/Banner/Banner";
import Collection from "../../components/Collection/Collection";
import NewArrivals from "../../components/NewArrivals/NewArrivals";
import BestOfAdidas from "../../components/BestOfAdidas/BestOfAdidas";

function PageHome() {
  return (
    <div>
      <Banner />
      <Collection />
      <NewArrivals />
      <BestOfAdidas />
    </div>
  );
}

export default PageHome;
