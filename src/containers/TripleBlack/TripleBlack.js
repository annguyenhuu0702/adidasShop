import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./../../assets/css/pageCollection.css";
import * as dataActions from "./../../redux/actions/index";
import { castToVND } from "./../../shared/index";
import { Link } from "react-router-dom";

function TripleBlack() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(dataActions.actFetchDataRequest());
  }, [dispatch]);

  const data = useSelector((state) => state.allData.allData);

  const [item, setItem] = useState(data);
  useEffect(() => {
    const newItem = data.filter(
      (item) => item.collection === "triple_black_collection"
    );
    setItem(newItem);
  }, [data]);

  const showTripleBlack = () => {
    let result = null;
    if (item.length > 0) {
      result = item.map((item, index) => {
        const { id, name, img, style, price } = item;
        return (
          <Link
            to={`product/${id}`}
            className="tripleblack-item col-lg-3"
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
    <div className="tripleblack">
      <div className="tripleblack-banner">
        <div className="tripleblack-banner__img">
          <img
            src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/viVN/Images/lace-fw20-triple-black-eu-plp-mh-mini-d_tcm337-569393.jpg"
            alt=""
          />
          <div className="tripleblack-banne__content">
            <h2>NGẪU HỨNG NHỊP ĐIỆU</h2>
            <p>
              Bộ sưu tập Giày Tập Luyện Triple Black hoà hợp <br /> với mọi thứ.
              Thoả sức sáng tạo.
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <h2>TRIPLE BLACK</h2>
          <div className="col-lg-12 d-flex">
            <div className="row">{showTripleBlack()}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TripleBlack;
