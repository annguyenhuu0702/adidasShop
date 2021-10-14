import React, { useState, useEffect } from "react";
import "./../../assets/css/product.css";
import { useSelector, useDispatch } from "react-redux";
import * as dataActions from "./../../redux/actions/index";
import { castToVND } from "./../../shared/index";
import { Link } from "react-router-dom";

function ProductMen() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(dataActions.actFetchDataRequest());
  }, [dispatch]);

  // lấy dữ liệu ở data
  const data = useSelector((state) => state.allData.allData);

  // render product nam
  const [item, setItem] = useState(() => {
    return data;
  });
  useEffect(() => {
    const newItem = data.filter((item) => item.status === "Nam");
    setItem(newItem);
  }, [data]);
  const showAllProductMen = () => {
    let result = null;
    if (item.length > 0) {
      result = item.map((item, index) => {
        const { id, name, img, price, style } = item;
        return (
          <Link
            to={`product/${id}`}
            className="col-lg-3 product__men-item"
            key={index}
          >
            <div className="Pitem__img">
              <img className="w-100" src={img} alt="" />
              <div className="Pitem__price">
                <span>{castToVND(price)}</span>
              </div>
            </div>
            <div className="Pitem__action">
              <div className="Pitem__action-name">
                <span>{name}</span>
              </div>
              <div className="Ptem-action__style">
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
    <section className="product-men">
      <div className="container">
        <div className="row">
          <div className="col-12 header-top__wrap">
            <div className="breadcrumb__container">
              <div className="breadcrumbs__menu">
                <ul>
                  <li>
                    <Link to="/">Trang chủ</Link>
                    <span>/</span>
                  </li>
                  <li>
                    <span>Nam</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="header">
              <div className="header-title">
                <h2>NAM</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12 product-item__wrapper">
            <div className="row">{showAllProductMen()}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductMen;
