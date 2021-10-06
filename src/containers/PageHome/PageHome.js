import React from "react";
import Banner from "./../../components/Banner/Banner";
import Collection from "../../components/Collection/Collection";
import NewArrivals from "../../components/NewArrivals/NewArrivals";

function PageHome() {
  return (
    <div>
      <Banner />
      <Collection />
      <NewArrivals />
    </div>
  );
}

export default PageHome;
