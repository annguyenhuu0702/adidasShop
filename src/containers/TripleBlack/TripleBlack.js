import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./../../assets/css/pageCollection.css";
import * as dataActions from "./../../redux/actions/index";

function TripleBlack() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(dataActions.actFetchDataRequest());
  }, [dispatch]);

  const data = useSelector((state) => state.allData.allData);

  const [item, setItem] = useState(data);
  useEffect(() => {
    const newItem = data.filter(
      (item) => item.collection === "triple_black_collection"
    );
    setItem(newItem);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const showTripleBlack = () => {
    let result = null;
    if (item.length > 0) {
      result = item.map((item, index) => {
        const { name, img } = item;
        return (
          <div className="tripleblack-item col-lg-3" key={index}>
            <div className="item-img">
              <img className="w-100" src={img} alt="" />
            </div>
            <div className="item-action">
              <div className="item-action__name">
                <span>{name}</span>
              </div>
            </div>
          </div>
        );
      });
    }
    return result;
  };

  return (
    <div className="tripleblack">
      <div className="container">
        <div className="row">
          <h2>TRIPLE BLACK</h2>
          <div className="col-lg-12 d-flex">
            <div className="row">{showTripleBlack()}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TripleBlack;
