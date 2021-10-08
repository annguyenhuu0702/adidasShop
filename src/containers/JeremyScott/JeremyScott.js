import React, { useState, useEffect } from "react";
import "./../../assets/css/jeremyscott.css";
import { useSelector, useDispatch } from "react-redux";
import * as dataActions from "./../../redux/actions/index";

function JeremyScott() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(dataActions.actFetchDataRequest());
  }, [dispatch]);

  const data = useSelector((state) => state.allData.allData);

  const [item, setItem] = useState(data);
  useEffect(() => {
    const newItem = data.filter((item) => item.type === "jeremy-scott");
    setItem(newItem);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const showJeremyscottItem = () => {
    let result = null;
    if (item.length > 0) {
      result = item.map((item, index) => {
        const { name, img } = item;
        return (
          <div className="jeremyscott-item col-lg-3" key={index}>
            <div className="item-img">
              <img className="w-100" src={img} alt="" />
            </div>
            <div className="item-name">
              <span>{name}</span>
            </div>
          </div>
        );
      });
    }
    return result;
  };

  return (
    <div className="jeremyscott">
      <div className="container">
        <div className="row">
          <h2>JEREMY SCOTT</h2>
          <div className="col-lg-12 d-flex">
            <div className="row">
              {showJeremyscottItem()}
              {/* <div className="jeremyscott-item">
              <div className="item-img">
                <img
                  className="w-100"
                  src="https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/5d760566c0564750910dad2101822689_9366/Dep_Bong_adilette_Jeremy_Scott_trai_cam_Q46582_01_standard.jpg"
                  alt=""
                />
              </div>
              <div className="item-name">
                <span>Dép Bông adilette Jeremy Scott</span>
              </div>
            </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JeremyScott;
