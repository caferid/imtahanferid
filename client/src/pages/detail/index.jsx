import React, { useEffect, useState } from "react";
import "./index.scss";
import { Helmet } from "react-helmet-async";
import axios from "axios";
import { useParams } from "react-router-dom";
function Detail() {
  const [product, setproduct] = useState([]);
  const { id } = useParams();
  const alldata = async () => {
    const res = await axios.get(`http://localhost:3000/${id}`);
    const data = res.data.data;
    setproduct(data);
  };
  useEffect(() => {
    alldata();
  }, []);
  return (
    <>
      <Helmet>
        <title>Detail</title>
      </Helmet>
      <div>
        <div id="detail">
              <p>{product.name}</p>
              <img src={product.src} alt="" />
            </div>
      </div>
    </>
  );
}

export default Detail;
