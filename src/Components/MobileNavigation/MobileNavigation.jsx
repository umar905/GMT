import React from "react";
import "./MobileNavigation.css";
import Katalog from "../../images/HeaderImages/Katalog.svg";
import Login from "../../images/HeaderImages/Login.svg";
import Like from "../../images/HeaderImages/Like.svg";
import Korzinka from "../../images/HeaderImages/Korzinka.svg";
import Home from "../../images/HeaderImages/Home.svg";
import { Link } from "react-router-dom";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";

const MobileNavigation = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <>
      <div className="links2">
        <Link>
          <img src={Home} alt="" />
          <p className="links_p2">Главная</p>
        </Link>
        <Link  onClick={toggleDrawer}>
          <img src={Katalog} alt="" />
          <p className="links_p2">Каталог</p>
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
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="top"
        className="bla bla bla"
      >
        <div className="container">
          <div className="drawer_info">
            <img src="./img/backto.svg" alt="" onClick={toggleDrawer}/>
            <h2>Каталог</h2>
            <img src="./img/cross.svg" alt="" onClick={toggleDrawer}/>
          </div>
          <ul className="header__inner">
            <a href="#">Реанимация</a>
            <a href="#">Хирургия</a>
            <a href="#">Офтальмология</a>
            <a href="#">Лабораторная диагностика</a>
            <a href="#">Акушерство</a>
            <a href="#">Гинекология</a>
            <a href="#">Гистология</a>
            <a href="#">Косметология</a>
            <a href="#">Оториноларингология</a>
            <a href="#">Рентгенология и томография</a>
          </ul>
        </div>
      </Drawer>
    </>
  );
};

export default MobileNavigation;
