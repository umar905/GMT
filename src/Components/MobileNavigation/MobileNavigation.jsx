import React from "react";
import "./MobileNavigation.css";
import Katalog from "../../images/HeaderImages/Katalog.svg";
import Login from "../../images/HeaderImages/Login.svg";
import Like from "../../images/HeaderImages/Like.svg";
import Korzinka from "../../images/HeaderImages/Korzinka.svg";
import Home from "../../images/HeaderImages/Home.svg";
import { Link } from "react-router-dom";
const MobileNavigation = () => {
  return (
    <>
     
        <div className="links2">
          <Link>
            <img src={Home} alt="" />
            <p className="links_p2">Главная</p>
          </Link>
          <Link>
            <img src={Katalog} alt="" />
            <p className="links_p2">Katalog</p>
          </Link>
          <Link>
            <img src={Korzinka} alt="" />
            <p className="links_p2">Корзина</p>
          </Link>
          <Link>
            <img src={Like} alt="" />
            <p className="links_p2">Избранное</p>
          </Link>
          <Link>
            <img src={Login} alt="" />
            <p className="links_p2">Войти</p>
          </Link>
        </div>
    </>
  );
};

export default MobileNavigation;
