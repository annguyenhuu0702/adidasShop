import React, { useEffect } from "react";
import "./../../assets/css/productDetail.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import * as dataActions from "./../../redux/actions/index";
import { castToVND } from "./../../shared/index";

function ProductDetail() {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const fetchProductDetail = async (id) => {
    const response = await axios
      .get(`http://localhost:3000/data/${id}`)
      .catch((err) => {
        console.log("Err", err);
      });
    dispatch(dataActions.actSelectedProduct(response.data));
  };
  useEffect(() => {
    fetchProductDetail(productId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const product = useSelector((state) => state.product);
  const { style, name, img, price, size } = product;
  return (
    <div className="page-product__detail">
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <div className="product-detail__left">
              <div className="detail-left__img">
                <img className="w-100" src={img} alt="" />
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="product-detail__right">
              <div className="detail-right__style">
                <span>{style}</span>
              </div>
              <div className="detail-right__name">
                <span>{name}</span>
              </div>
              <div className="detail-right__price">
                <span>{castToVND(price)}</span>
              </div>
              <div className="detail-right__size">
                <div>
                  <span>Chọn size</span>
                </div>
                <div className="right-size__box">
                  {size?.map((item, index) => {
                    return <button key={index}>{item}</button>;
                  })}
                </div>
              </div>
              <div className="detai-right__btn">
                <button>
                  <span>Thêm vào giỏ hàng</span>
                </button>
              </div>
              <div className="detai-right__policy">
                <p>
                  <a href=" ">Ưu đãi 10.10 đã bắt đầu!</a>
                </p>
                <p>
                  <a href=" ">
                    Không đúng kích cỡ hoặc màu sắc? Vui lòng truy cập trang Trả
                    lại hàng & Hoàn tiền của chúng tôi để biết chi tiết
                  </a>
                </p>
                <p>
                  <a href=" ">
                    Do ảnh hưởng COVID-19, thời gian giao hàng sẽ dài hơn dự
                    kiến
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
