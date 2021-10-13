import React from "react";
import "./../../assets/css/modalAddToCart.css";

function ModalAddToCart() {
  return (
    <div className="modal-body">
      <div className="d-flex justify-content-center">
        <h2 className="mb-5">ĐÃ THÊM VÀO GIỎ HÀNG THÀNH CÔNG CỦA BẠN!</h2>
      </div>
      <div className="modal-detail">
        <div className="modal-left">
          <div className="modal-left__img">
            <img
              src="https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/08965b3d5dd9457e9a8aac840039672b_9366/Ao_thun_Ba_La_Classics_Adicolor_DJen_GN2896_21_model.jpg"
              alt=""
            />
          </div>
          <div className="modal-left__content">
            <div className="left__content-name">
              <span>GIÀY CHẠY BỘ ULTRABOOST 21 TOKYO</span>
            </div>
            <div className="left__content-price">
              <span>7500000</span>
            </div>
            <div className="left__content-size">
              <span>Size 28</span>
            </div>
            <div className="left__content-qtt">
              <span>Số lượng 1</span>
            </div>
          </div>
        </div>
        <div className="modal-right">
          <div className="modal-right__content">
            <h2>GIỎ HÀNG CỦA BẠN</h2>
            <div>
              <span>2 mặt hàng</span>
            </div>
            <div className="d-flex justify-content-between">
              <span>Tổng giá trị sản phẩm</span>
              <span>700000</span>
            </div>
            <div className="content__ship">
              <span>Tổng phí giao hàng</span>
              <span>Miễn phí</span>
            </div>
            <div className="content__total-price">
              <span>Tổng cộng</span>
              <p>70000000</p>
            </div>
            <div className="content__view-cart">
              <button type="">
                <span>XEM LẠI GIỎ HÀNG</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalAddToCart;
