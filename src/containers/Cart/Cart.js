import React from "react";
import "./../../assets/css/cart.css";
import { useDispatch, useSelector } from "react-redux";
import { castToVND } from "./../../shared/index";
import { Link } from "react-router-dom";
import * as dataActions from "./../../redux/actions/index";
import { ActionsType } from "./../../redux/constants/ActionsType";

function Cart() {
  const item = useSelector((state) => state.cartItem);
  const quantity = item.length;

  const showCartItem = () => {
    let result = null;
    if (item.length > 0) {
      result = item.map((product, index) => {
        const qtt = product.qtt;
        const size = product.changeSize;
        const { id, name, img, price } = product.product;
        return (
          <div className="cart-left d-flex" key={index}>
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
              <div className="cart-left__size">
                <span>Size: {size}</span>
              </div>
              <div className="cart-left__qtt">
                <span>
                  <i
                    className="fal fa-minus"
                    onClick={() =>
                      dispatch({ type: ActionsType.DEC, payload: id })
                    }
                  ></i>
                </span>
                <span>{qtt}</span>
                <span>
                  <i
                    className="fal fa-plus"
                    onClick={() =>
                      dispatch({ type: ActionsType.INC, payload: id })
                    }
                  ></i>
                </span>
              </div>
              <div className="remove-product">
                <span onClick={() => removeProduct(product)}>Xóa</span>
              </div>
            </div>
          </div>
        );
      });
    }
    return result;
  };

  let totalPrice = 0;
  item.map((product) => {
    return (totalPrice += product.qtt * product.product.price);
  });

  const dispatch = useDispatch();
  const removeProduct = (product) => {
    dispatch(dataActions.actRemoveProduct(product));
  };

  return (
    <div className="cart">
      <div className="container">
        <div className="row">
          {quantity > 0 ? (
            <>
              <h2>GIỎ HÀNG CỦA BẠN</h2>
              <div className="col-lg-12 d-flex">
                <div className="col-lg-8 pl-0">{showCartItem()}</div>
                <div className="col-lg-4 cart-right">
                  <div className="cart-right__content">
                    <h2>TÓM TẮT ĐƠN HÀNG</h2>
                    <div className="right-content__product">
                      <span>{quantity} SẢN PHẨM</span>
                      <span>{castToVND(totalPrice)}</span>
                    </div>
                    <div className="right-content__ship">
                      <span>Giao hàng</span>
                      <span>Miễn phí</span>
                    </div>
                    <div className="right-content__price">
                      <span>Tổng</span>
                      <span>{castToVND(totalPrice)}</span>
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
