import React, { useState } from "react";
import "./index.scss";
import { Link, NavLink } from "react-router-dom";
function Navbar() {
  const [isopen, setisopen] = useState(true);
  return (
    <div id="navbar">
      <div className="dev">
        <div className="title">
          <img
            src="https://preview.colorlib.com/theme/timezone/assets/img/logo/logo.png"
            alt=""
          />
        </div>
        <div className="links">
          <NavLink className={"navlik"} to={"/"}>
            HOME
          </NavLink>
          <NavLink className={"navlik"} to={"/add"}>
            ADD
          </NavLink>

          <Link className={"navlik"}>about</Link>
          <Link className={"navlik"}>count</Link>
        </div>
        <div className="icons">
          <NavLink className={"navlik"} to={"/basket"}>
            <i className="fa-solid fa-basket-shopping"></i>
          </NavLink>
          <NavLink className={"navlik"} to={"/wish"}>
            <i className="fa-solid fa-heart"></i>
          </NavLink>
          <i className="fa-solid fa-magnifying-glass  navlik"></i>
        </div>
      </div>
      <div className="mobil">
        <div className="title">
          <img
            src="https://preview.colorlib.com/theme/timezone/assets/img/logo/logo.png"
            alt=""
          />
        </div>
        <div className={`links ${isopen?'':'open'}`}>
          <NavLink  onClick={() => setisopen(!isopen)}  className={"navlik"} to={"/"}>
            HOME
          </NavLink>
          <NavLink  onClick={() => setisopen(!isopen)}  className={"navlik"} to={"/add"}>
            ADD
          </NavLink>

          <Link className={"navlik"}>about</Link>
          <Link className={"navlik"}>count</Link>
          <div className="icons">
            <NavLink  onClick={() => setisopen(!isopen)}  className={"navlik"} to={"/basket"}>
              <i className="fa-solid fa-basket-shopping"></i>
            </NavLink>
            <NavLink  onClick={() => setisopen(!isopen)}  className={"navlik"} to={"/wish"}>
              <i className="fa-solid fa-heart"></i>
            </NavLink>
            <i className="fa-solid fa-magnifying-glass  navlik"></i>
          </div>
        </div>
        <div onClick={() => setisopen(!isopen)} className="bars" >
          <i className={`fa-solid fa-${isopen ? "bars" : "xmark"}`}></i>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
