import React from "react";
import "../../assets/css/base.css";
import "../../assets/css/newarrivals.css";
import { castToVND } from "../../shared";

function NewArrivals(props) {
  const { arrivals } = props;
  const showNewArrivals = () => {
    let result = null;
    if (arrivals.length > 0) {
      result = arrivals.map((item, index) => {
        const { name, img, price } = item;
        return (
          <div className="col-lg-3 arrivals-item" key={index}>
            <div className="arrivals-img">
              <img className="w-100" src={img} alt="" />
              <div className="arrivals-price">
                <span>{castToVND(price)}</span>
              </div>
            </div>
            <div className="arrivals-name">
              <span>{name}</span>
            </div>
          </div>
        );
      });
    }
    return result;
  };
  return (
    <section className="newarrivals">
      <div className="container">
        <div className="newarrivals-title">
          <h2>NEW ARRIVALS</h2>
        </div>
        <div className="row">
          {showNewArrivals()}
          {/* <div className="col-lg-3 arrivals-item">
            <div className="arrivals-img">
              <img
                className="w-100"
                src="https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/2925c48189484a86a968ad3900fb71a7_9366/SUPERTURF_ADVENTURE_SEAN_WOTHERSPOON_nau_GY8341_01_standard.jpg"
                alt=""
              />
              <div className="arrivals-price">
                <span>4.000.000đ</span>
              </div>
            </div>
            <div className="arrivals-name">
              <span>SUPERTURF ADVENTURE SEAN WOTHERSPOON</span>
            </div>
          </div>
          <div className="col-lg-3 arrivals-item">
            <div className="arrivals-img">
              <img
                className="w-100"
                src="https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/2925c48189484a86a968ad3900fb71a7_9366/SUPERTURF_ADVENTURE_SEAN_WOTHERSPOON_nau_GY8341_01_standard.jpg"
                alt=""
              />
              <div className="arrivals-price">
                <span>4.000.000đ</span>
              </div>
            </div>
            <div className="arrivals-name">
              <span>SUPERTURF ADVENTURE SEAN WOTHERSPOON</span>
            </div>
          </div>
          <div className="col-lg-3 arrivals-item">
            <div className="arrivals-img">
              <img
                className="w-100"
                src="https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/2925c48189484a86a968ad3900fb71a7_9366/SUPERTURF_ADVENTURE_SEAN_WOTHERSPOON_nau_GY8341_01_standard.jpg"
                alt=""
              />
              <div className="arrivals-price">
                <span>4.000.000đ</span>
              </div>
            </div>
            <div className="arrivals-name">
              <span>SUPERTURF ADVENTURE SEAN WOTHERSPOON</span>
            </div>
          </div>
          <div className="col-lg-3 arrivals-item">
            <div className="arrivals-img">
              <img
                className="w-100"
                src="https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/2925c48189484a86a968ad3900fb71a7_9366/SUPERTURF_ADVENTURE_SEAN_WOTHERSPOON_nau_GY8341_01_standard.jpg"
                alt=""
              />
              <div className="arrivals-price">
                <span>4.000.000đ</span>
              </div>
            </div>
            <div className="arrivals-name">
              <span>SUPERTURF ADVENTURE SEAN WOTHERSPOON</span>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default NewArrivals;
