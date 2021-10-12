import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./../../assets/css/pageCollection.css";
import * as dataActions from "./../../redux/actions/index";
import { castToVND } from "./../../shared/index";
import { Link } from "react-router-dom";

function QuanVotGiay() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(dataActions.actFetchDataRequest());
  }, [dispatch]);

  const data = useSelector((state) => state.allData.allData);

  const [item, setItem] = useState(data);
  useEffect(() => {
    const newItem = data.filter((item) => item.collection === "quan_vot-giay");
    setItem(newItem);
  }, [data]);

  const showQuanVotGiay = () => {
    let result = null;
    if (item.length > 0) {
      result = item.map((item, index) => {
        const { id, name, img, style, price } = item;
        return (
          <Link
            to={`product/${id}`}
            className="quanvotgiay-item col-lg-3"
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
    <div className="quanvotgiay">
      <div className="quanvotgiay-banner">
        <div className="quanvotgiay-banner__img">
          <img
            src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/viVN/Images/specialist-sport-fw21-Barricade_USOPEN-launch-plp-masthead-mini-d_tcm337-730734.jpg"
            alt=""
          />
        </div>
        <div className="quanvotgiay-banner__content">
          <h2>BARRICADE IS BACK!</h2>
          <p>
            Giày Barricade mới cho bạn sự kiểm soát cần <br /> thiết để làm chủ
            cuộc chơi.
          </p>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <h2>QUẦN VỢT · GIÀY </h2>
          <div className="col-lg-12 d-flex product-item__wrapper">
            <div className="row">{showQuanVotGiay()}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuanVotGiay;
