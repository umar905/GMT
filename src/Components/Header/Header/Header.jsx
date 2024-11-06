import React, { useState } from "react";
import TopHeader from "../TopHeader/TopHeader";
import Logo from "../../../images/HeaderImages/Logo.svg";
import { Link } from "react-router-dom";
import InputHeader from "../InputHeader/InputHeader";
import Login from "../../../images/HeaderImages/Login.svg";
import Like from "../../../images/HeaderImages/Like.svg";
import Comparsion from "../../../images/HeaderImages/Comparsion.svg";
import Korzinka from "../../../images/HeaderImages/Korzinka.svg";
import "./Header.css";
import MobileNavigation from "../../MobileNavigation/MobileNavigation";
import BottomNavigation from "../BottomNavigation/BottomNavigation";
import Phone from "../../../images/HeaderImages/Phone.svg";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
const Header = () => {
  const [isOpencontact, setIsOpencontact] = React.useState(false)
  const toggleDrawercontact = () => {
    setIsOpencontact((prevState) => !prevState)
  }

  const [isOpen, setIsOpen] = useState(false);
  const [isBurgerX, setIsBurgerX] = useState(false);

  const toggleBurger = () => {
    toggleBurgerX();
    toggleMenu();
  };

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const toggleBurgerX = () => {
    setIsBurgerX((prev) => !prev);
  };

  const toggleCloseMenu = () => {
    toggleBurger();
  };

  const [isOpenn, setIsOpenn] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpenn((prevState) => !prevState);
  };
  return (
    <>
      <header>
        <TopHeader />
        <div className="container bottom-header">
          <div className="bottomHeader">
            <Link to={"/"} className="laptop-mode">
              <img src={Logo} alt="" />
            </Link>
            <div className="mobileHeader">
              <div className="logo-mobile">
                <Link to={"/"}>
                  <img src={Logo} alt="" />
                </Link>
              </div>
              <div className="burger">
                <Link className="phoneIcon">
                  <img
                    src={Phone}
                    alt=""
                    width={"24px"}
                    height={"24px"}
                    className=""
                  />
                </Link>
                <button
                  width={"24px"}
                  height={"24px"}
                  onClick={toggleBurger}
                  className={
                    isBurgerX ? "header__burger active" : "header__burger"
                  }
                >
                  <span></span>
                  <span></span>
                  <span></span>
                </button>
              </div>
            </div>
            <InputHeader />
            <p className="adress">
              Пн-Пт с 09:00-19:00 <br />
              Сб-Вс - выходной
            </p>
          </div>
          <div className="links">
            <Link>
              <img src={Login} alt="" />
              <p className="links_p">Войти</p>
            </Link>
            <Link>
              <img src={Like} alt="" />
              <p className="links_p">Избранное</p>
            </Link>
            <Link>
              <img src={Comparsion} alt="" />
              <p className="links_p">Сравнить</p>
            </Link>
            <Link>
              <img src={Korzinka} alt="" />
              <p className="links_p">Корзина</p>
            </Link>
          </div>
        </div>
      </header>
      <div className="bottomMobileNav">
        <MobileNavigation />
      </div>
      <div className="bottomNavigation">
        <BottomNavigation />
      </div>

      <div className={isOpen ? "header__menu active" : "header__menu"}>
        <div className="adressMobile">
          <div className="left-right-adress">
            <b>+7(495)000-00-00</b>
            <b>info@mail.ru</b>
            <p className="gray">г. Москва, ул. Московская, д. 35</p>
          </div>

          <div className="left-right-adress">
            <p>
              Пн-Пт с 09:00-19:00 <br />
              Сб-Вс - выходной
            </p>
          </div>
        </div>
        <ul className="header__inner">
          <a onClick={toggleDrawer}>Информация</a>
          <a onClick={toggleDrawercontact} href="#">
            Контакты
          </a>
          <a onClick={toggleCloseMenu} href="#">
            О нас
          </a>
          <a onClick={toggleCloseMenu} href="#">
            Сравнение
          </a>
        </ul>
      </div>

      <Drawer
        open={isOpenn}
        onClose={toggleDrawer}
        direction="right"
        className="bla bla bla"
      >
        <div className="container">
          <div className="drawer_info">
            <img src="./img/backto.svg" alt="" onClick={toggleDrawer}/>
            <h2>Информация</h2>
            <img src="./img/cross.svg" alt="" onClick={toggleDrawer}/>
          </div>
          <ul className="header__inner">
            <a href="#">Доставка</a>
            <a href="#">Оплата</a>
            <a href="#">Акции</a>
            <a href="#">Гарантии</a>
            <a href="#">Производители</a>
            <a href="#">Блог</a>
            <a href="#">Услуги</a>
            <a href="#">Покупателям</a>
            <a href="#">Сертификаты</a>
            <a href="#">Партнерские программы</a>
          </ul>
        </div>
      </Drawer>
      <Drawer
        open={isOpencontact}
        onClose={toggleDrawercontact}
        direction="right"
        className="bla bla bla"
      >
        <div className="container">
          <div className="drawer_info">
            <img src="./img/backto.svg" alt="" onClick={toggleDrawercontact}/>
            <h2>Контакты</h2>
            <img src="./img/cross.svg" alt="" onClick={toggleDrawercontact}/>
          </div>
          <ul className="header__inner">
            <a href="#">Контакты</a>
            <a href="#">Отзывы</a>
            <a href="#">Контакты</a>
          </ul>
        </div>
      </Drawer>
    </>
  );
};

export default Header;
