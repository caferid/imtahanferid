import React from "react";
import "./index.scss";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { usewish } from "../../context/usewishContext";
import { usebasket } from "../../context/usebasketContext";
function Basket() {
  const {wish,setwish,handlewish}=usewish()
  const { basket, setbasket, handlebasket,artir,azalir,delbasket }=usebasket()
  return (
    <>
      <Helmet>
        <title>Basket</title>
      </Helmet>
      <div>
      <div id="wish">
      <div className="dev">
        <div className="p">
         {/* {wish && wish.map((item)=>(
        <p key={item._id}>
          <p>{item.name}</p>
        </p>
         ))} */}
          {basket &&
            basket.map((item) => (
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

              <div className="">
                <button onClick={()=>artir(item)}>+</button>
                <p> count{item.count}</p>
                <button onClick={()=>azalir(item)}>-</button>
              </div>
              </div>
            ))}

        </div>
      </div>
    </div>
      </div>
    </>
  );
}

export default Basket;
