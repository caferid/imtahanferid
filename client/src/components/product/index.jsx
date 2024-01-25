import React, { useEffect, useState } from "react";
import axios from "axios";
import "./index.scss";
function Product() {
  const [product, setproduct] = useState([]);
  const alldata = async () => {
    const res = await axios.get("http://localhost:3000/");
    const data = res.data.data;
    setproduct(data);
  };
  useEffect(() => {
    alldata();
  }, []);

  return (
    <div id="product">
      <div className="dev">
        <div className="p">
          {product &&
            product.map((item) => (
              <div className="bigbox" key={item._id}>
                <div className="img">
                  <img src={item.src} alt="" />
                  <div className="wish">
                  <i className="fa-regular fa-heart"></i>
                  </div>
                  <div className="basket">
                    Add to basket
                  </div>
                </div>
                <div className="text">
                  <div className="name">{item.name}</div>
                  <div className="price">$ {item.price}</div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Product;
