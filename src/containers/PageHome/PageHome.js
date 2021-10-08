import React, { useEffect, useState } from "react";
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

  // filter data collection
  const [collection, setCollection] = useState(data);
  useEffect(() => {
    const newCollection = data.filter((x) => x.type === "what-hot");
    setCollection(newCollection);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  // filter data newarrivals
  const [arrivals, setArrival] = useState(data);
  useEffect(() => {
    const newArrival = data.filter((item) => item.type === "new-arrivals");
    setArrival(newArrival);
  }, [data]);

  // filter data best of adidas
  const [BOAdidas, setBOAdidas] = useState(data);
  useEffect(() => {
    const newBOAdidas = data.filter((item) => item.type === "best-of-adidas");
    setBOAdidas(newBOAdidas);
  }, [data]);

  return (
    <div>
      <Banner />
      <Collection collection={collection} />
      <NewArrivals arrivals={arrivals} />
      <BestOfAdidas BOAdidas={BOAdidas} />
    </div>
  );
}

export default PageHome;
