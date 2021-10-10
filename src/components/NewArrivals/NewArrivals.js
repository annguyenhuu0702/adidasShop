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
        <div className="row">{showNewArrivals()}</div>
      </div>
    </section>
  );
}

export default NewArrivals;
