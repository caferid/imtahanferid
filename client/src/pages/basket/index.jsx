import React from "react";
import "./index.scss";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { usewish } from "../../context/usewishContext";
import { usebasket } from "../../context/usebasketContext";
function Basket() {
  const { wish, setwish, handlewish } = usewish();
  const { basket, setbasket, handlebasket, artir, azalir, delbasket } =
    usebasket();
  return (
    <>
      <Helmet>
        <title>Basket</title>
      </Helmet>
      <div>
        <div id="wish">
          <div className="dev">
            {basket.length !== 0 ?<p>
              total price:
              {basket.reduce((a, b) => a + b.count * b.price, 0)}
            </p>:''}
            
            <div className="p">
              {/* {wish && wish.map((item)=>(
        <p key={item._id}>
          <p>{item.name}</p>
        </p>
         ))} */}
              {basket.length !== 0 ? (
                basket &&
                basket.map((item) => (
                  <div className="bigbox" key={item._id}>
                    <div className="img">
                      <Link to={`/detail/${item._id}`}>
                        <img src={item.src} alt="" />
                      </Link>
                      <div onClick={() => handlewish(item)} className="wish">
                        <i className={`fa-${wish.find(x=>x._id===item._id)?'solid':'regular'} fa-heart`}></i>
                      </div>
                      <div onClick={() => delbasket(item)} className="basket">
                        basket delet basket
                      </div>
                    </div>
                    <div className="text">
                      <div className="name">{item.name}</div>
                      <div className="price">$ {item.price}</div>
                    </div>

                    <div className="">
                      <p>total {item.price*item.count}</p>
                      <button className="count" onClick={() => artir(item)}>+</button>
                      <p> count{item.count}</p>
                      <button  className="count"  onClick={() => azalir(item)}>-</button>
                    </div>
                  </div>
                ))
              ) : (
                <p> basket bosdur</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Basket;
