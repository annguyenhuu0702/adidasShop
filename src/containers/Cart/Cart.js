import React from "react";
import "./../../assets/css/cart.css";
import { useSelector } from "react-redux";
import { castToVND } from "./../../shared/index";
import { Link } from "react-router-dom";

function Cart() {
  const item = useSelector((state) => state.cartItem.cartItem);
  const qtt = item.length;
  const showCartItem = () => {
    let result = null;
    if (item.length > 0) {
      result = item.map((product) => {
        const { id, name, img, price, qtt } = product;
        return (
          <div className="cart-left d-flex" key={id}>
            <div className="cart-left__img">
              <img src={img} alt="" />
            </div>
            <div className="cart-left__content">
              <div className="cart-left__name">
                <a href=" ">{name}</a>
              </div>
              <div className="cart-left__price">
                <span>{castToVND(price)}</span>
              </div>
              <div className="cart-left__qtt">
                <span>
                  <i className="fal fa-minus"></i>
                </span>
                <span>{qtt}</span>
                <span>
                  <i className="fal fa-plus"></i>
                </span>
              </div>
              <div className="remove-product">
                <span>Xóa</span>
              </div>
            </div>
          </div>
        );
      });
    }
    return result;
  };
  return (
    <div className="cart">
      <div className="container">
        <div className="row">
          {qtt > 0 ? (
            <>
              <h2>GIỎ HÀNG CỦA BẠN</h2>
              <div className="col-lg-12 d-flex">
                <div className="col-lg-8 pl-0">{showCartItem()}</div>
                <div className="col-lg-4 cart-right">
                  <div className="cart-right__content">
                    <h2>TÓM TẮT ĐƠN HÀNG</h2>
                    <div className="right-content__product">
                      <span>1 SẢN PHẨM</span>
                      <span>500000</span>
                    </div>
                    <div className="right-content__price">
                      <span>Tổng</span>
                      <span>500000</span>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className="no-cart">
              <h2>TÚI CỦA BẠN ĐANG TRỐNG</h2>
              <p>
                Once you add something to your bag - it will appear here. Ready
                to get started?
              </p>
              <button type="">
                <Link to="/">GET STARTED</Link>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Cart;
