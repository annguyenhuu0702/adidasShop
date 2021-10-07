import React, { useEffect } from "react";
import Banner from "./../../components/Banner/Banner";
import Collection from "../../components/Collection/Collection";
import NewArrivals from "../../components/NewArrivals/NewArrivals";
import BestOfAdidas from "../../components/BestOfAdidas/BestOfAdidas";
import { useSelector, useDispatch } from "react-redux";
import * as dataActions from "./../../redux/actions/index";

function PageHome() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(dataActions.actFetchDataRequest());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const data = useSelector((state) => state.allData.allData);
  return (
    <div>
      <Banner />
      <Collection data={data} />
      <NewArrivals />
      <BestOfAdidas />
    </div>
  );
}

export default PageHome;
