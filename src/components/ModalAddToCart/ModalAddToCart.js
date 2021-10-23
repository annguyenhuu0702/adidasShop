import React from "react";
import "./../../assets/css/modalAddToCart.css";
import { useSelector } from "react-redux";
import { castToVND } from "./../../shared/index";
import { Link } from "react-router-dom";

function ModalAddToCart(props) {
  const { setSize } = props;
  const item = useSelector((state) => state.product.product);
  const { name, img, price } = item;

  return (
    <div className="modal-body">
      <div className="d-flex justify-content-center">
        <h2 className="mb-5">ĐÃ THÊM VÀO GIỎ HÀNG THÀNH CÔNG CỦA BẠN!</h2>
      </div>
      <div className="modal-detail">
        <div className="modal-left">
          <div className="modal-left__img">
            <img src={img} alt="" />
          </div>
          <div className="modal-left__content">
            <div className="left__content-name">
              <span>{name}</span>
            </div>
            <div className="left__content-price">
              <span>{castToVND(price)}</span>
            </div>
            <div className="left__content-size">
              <span>Size: {setSize}</span>
            </div>
            <div className="left__content-qtt">
              <span>Số lượng: 1</span>
            </div>
          </div>
        </div>
        <div className="modal-right">
          <div className="modal-right__content">
            <h2>GIỎ HÀNG CỦA BẠN</h2>
            <div>
              <span>1 mặt hàng</span>
            </div>
            <div className="d-flex justify-content-between">
              <span>Tổng giá trị sản phẩm</span>
              <span>{castToVND(price)}</span>
            </div>
            <div className="content__ship">
              <span>Tổng phí giao hàng</span>
              <span>Miễn phí</span>
            </div>
            <div className="content__total-price">
              <span>Tổng cộng</span>
              <p>{castToVND(price)}</p>
            </div>
            <div className="content__view-cart">
              <button>
                <Link to="/cart">XEM LẠI GIỎ HÀNG</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalAddToCart;
