import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import * as dataActions from "./../../redux/actions/index";

function ProductDetail() {
  const { productId } = useParams();
  useEffect(() => {
    dataActions.actFetchDataRequest(productId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h1>ddaya la trnag chi tiet san pham</h1>
    </div>
  );
}

export default ProductDetail;
