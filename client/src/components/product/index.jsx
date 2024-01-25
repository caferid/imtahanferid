import React, { useEffect, useState } from "react";
import axios from "axios";
import "./index.scss";
import { usewish } from "../../context/usewishContext";
import { usebasket } from "../../context/usebasketContext";
import { Link } from "react-router-dom";
function Product() {
    const {wish,setwish,handlewish}=usewish()
    const { basket, setbasket, handlebasket,artir,azalir,delbasket }=usebasket()
    ////
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
                    <Link to={`/detail/${item._id}`}>
                  <img src={item.src} alt="" />
                    </Link>
                  <div onClick={()=>handlewish(item)} className="wish">
                  <i className="fa-regular fa-heart"></i>
                  </div>
                  <div onClick={()=>handlebasket(item)} className="basket">
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
