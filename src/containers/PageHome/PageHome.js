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
  }, [dispatch]);
  const data = useSelector((state) => state.allData.allData);

  // filter data collection
  const [collection, setCollection] = useState(data);
  useEffect(() => {
    const newCollection = data.filter((x) => x.classify === "what-hot");
    setCollection(newCollection);
  }, [data]);

  // filter data newarrivals
  const [arrivals, setArrival] = useState(data);
  useEffect(() => {
    const newArrival = data.filter((item) => item.classify === "new-arrivals");
    setArrival(newArrival);
  }, [data]);

  // filter data best of adidas
  const [BOAdidas, setBOAdidas] = useState(data);
  useEffect(() => {
    const newBOAdidas = data.filter(
      (item) => item.classify === "best-of-adidas"
    );
    setBOAdidas(newBOAdidas);
  }, [data]);

  return (
    <section className="page-home">
      <Banner />
      <Collection collection={collection} />
      <NewArrivals arrivals={arrivals} />
      <BestOfAdidas BOAdidas={BOAdidas} />
    </section>
  );
}

export default PageHome;
