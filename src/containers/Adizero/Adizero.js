import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./../../assets/css/pageCollection.css";
import * as dataActions from "./../../redux/actions/index";
import { castToVND } from "./../../shared/index";
import { Link } from "react-router-dom";

function Adizero() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(dataActions.actFetchDataRequest());
  }, [dispatch]);

  //lấy data ở store
  const data = useSelector((state) => state.allData.allData);

  //render bộ sưu tập adizero chạy
  const [item, setItem] = useState(data);
  useEffect(() => {
    const newItem = data.filter((item) => item.collection === "adizero-chay");
    setItem(newItem);
  }, [data]);

  const showAdizero = () => {
    let result = null;
    if (item.length > 0) {
      result = item.map((item, index) => {
        const { id, name, img, style, price } = item;
        return (
          <Link
            to={`product/${id}`}
            className="adizero-item col-lg-3"
            key={index}
          >
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
          </Link>
        );
      });
    }
    return result;
  };

  return (
    <section className="adizero">
      <div className="container">
        <div className="row">
          <h2>ADIZERO · CHẠY</h2>
          <div className="col-lg-12 d-flex product-item__wrapper">
            <div className="row">{showAdizero()}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Adizero;
