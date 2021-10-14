import React from "react";
import "./../../assets/css/cart.css";
import { useSelector } from "react-redux";
import { castToVND } from "./../../shared/index";

function Cart() {
  const item = useSelector((state) => state.cartItem.cartItem);
  const showCartItem = () => {
    let result = null;
    if (item.length > 0) {
      result = item.map((product) => {
        const { id, name, img, price } = product;
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
                  <i className="far fa-plus"></i>
                </span>
                <span>1</span>
                <span>
                  <i className="fal fa-minus"></i>
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
          <h2>GIỎ HÀNG CỦA BẠN</h2>
          <div className="col-lg-12 d-flex">
            <div className="col-lg-8 pl-0">{showCartItem()}</div>
            <div className="col-lg-4 cart-right">
              <div>helo</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
