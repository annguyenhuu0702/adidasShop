import React, { useState, useEffect } from "react";
import "./../../assets/css/product.css";
import { useSelector, useDispatch } from "react-redux";
import * as dataActions from "./../../redux/actions/index";
import { castToVND } from "./../../shared/index";
import { Link } from "react-router-dom";

function ProductChildren() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(dataActions.actFetchDataRequest());
  }, [dispatch]);

  //lấy data store
  const data = useSelector((state) => state.allData.allData);

  // render product trẻ em
  const [item, setItem] = useState(data);
  useEffect(() => {
    const newItem = data.filter((item) => item.status === "Trẻ em");
    setItem(newItem);
  }, [data]);

  const showAllProductChildren = () => {
    let result = null;
    if (item.length > 0) {
      result = item.map((item, index) => {
        const { id, name, img, price, style } = item;
        return (
          <Link
            to={`product/${id}`}
            className="col-lg-3 product__children-item"
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
    <section className="product-children">
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
                    <span>Trẻ em</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="header">
              <div className="header-title">
                <h2>TRẺ EM</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12 product-item__wrapper">
            <div className="row">{showAllProductChildren()}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductChildren;
