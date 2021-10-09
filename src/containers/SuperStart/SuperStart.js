import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./../../assets/css/pageCollection.css";
import * as dataActions from "./../../redux/actions/index";
import { castToVND } from "./../../shared/index";

function SuperStart() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(dataActions.actFetchDataRequest());
  }, [dispatch]);

  const data = useSelector((state) => state.allData.allData);

  const [item, setItem] = useState(data);
  useEffect(() => {
    const newItem = data.filter((item) => item.collection === "superstar-giay");
    setItem(newItem);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const showSuperStart = () => {
    let result = null;
    if (item.length > 0) {
      result = item.map((item, index) => {
        const { name, img, style, price } = item;
        return (
          <div className="superstart-item col-lg-3" key={index}>
            <div className="item-img">
              <img className="w-100" src={img} alt="" />
              <div className="item-price">
                <span>{castToVND(price)}</span>
              </div>
            </div>
            <div className="item-action">
              <div className="item-action__name">
                <span>{name}</span>
              </div>
              <div className="item-action__style">
                <span>{style}</span>
              </div>
            </div>
          </div>
        );
      });
    }
    return result;
  };

  return (
    <div className="superstart">
      <div className="container">
        <div className="row">
          <h2>SUPERSTAR · GIÀY</h2>
          <div className="col-lg-12 d-flex">
            <div className="row">{showSuperStart()}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SuperStart;
