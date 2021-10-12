import React, { useState, useEffect } from "react";
import "./../../assets/css/product.css";
import { useSelector, useDispatch } from "react-redux";
import * as dataActions from "../../redux/actions/index";
import { castToVND } from "../../shared/index";
import { Link } from "react-router-dom";

function ChildrenClothes() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(dataActions.actFetchDataRequest());
  }, [dispatch]);

  const data = useSelector((state) => state.allData.allData);

  const [item, setItem] = useState(data);
  useEffect(() => {
    const newItem = data.filter((item) => item.type === "quan-ao-tre-em");
    setItem(newItem);
  }, [data]);

  const showChildrenClothes = () => {
    let result = null;
    if (item.length > 0) {
      result = item.map((item, index) => {
        const { name, img, price, style } = item;
        return (
          <div className="col-lg-3 clothes-item" key={index}>
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
          </div>
        );
      });
    }
    return result;
  };
  return (
    <div className="CClothes">
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
                    <Link to="/nam">Trẻ em</Link>
                    <span>/</span>
                  </li>
                  <li>
                    <span>Quần áo</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="header">
              <div className="header-title">
                <h2>TRẺ EM · QUẦN ÁO</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="row">{showChildrenClothes()}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChildrenClothes;
