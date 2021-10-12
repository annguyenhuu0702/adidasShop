import React, { useEffect, useState } from "react";
import "./../../assets/css/productDetail.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import * as dataActions from "./../../redux/actions/index";
import { castToVND } from "./../../shared/index";
import { Link } from "react-router-dom";

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
  const { style, name, img, price, size, status, path } = product;

  const [changeSize, setChangeSize] = useState();
  return (
    <section className="page-product__detail">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="product-detail__menu">
              <ul className="d-flex">
                <li>
                  <Link to="/">Trang chủ</Link>
                  <span>/</span>
                </li>
                <li>
                  <Link to={`${path}`}>{status}</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
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
              {size?.length > 0 ? (
                <div className="detail-right__size">
                  <div>
                    <span>Chọn size</span>
                  </div>
                  <div className="right-size__box">
                    {size?.map((size, index) => {
                      return (
                        <button
                          className={
                            changeSize === size
                              ? "right-size__box-btn active"
                              : "right-size__box-btn"
                          }
                          onClick={() => setChangeSize(size)}
                          key={index}
                        >
                          {size}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ) : (
                ""
              )}
              <div className="detai-right__btn-add-cart">
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
    </section>
  );
}

export default ProductDetail;
