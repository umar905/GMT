import React from "react";
import { Link } from "react-router-dom";
import Location from '../../../images/HeaderImages/Location.svg'
import './BottomNavigation.css'
const BottomNavigation = () => {
  return (
    <>
      <div className="bottom-navigation">
      <div className="container">
        <ul className="catalog-list">
          <Link>Каталог</Link>
          <Link>Производители</Link>
          <Link>Кабинеты под ключ</Link>
          <Link>Услуги</Link>
          <Link>Акции</Link>
          <Link>Покупателям</Link>
          <Link to={"/contact"}>Контакты</Link>
        </ul>
        <ul className="catalog-list-right">
            <Link className="Location-bottom">Москва <img src={Location} alt="" /></Link>
            <Link className="btn-phone-number">+7(495)000-00-00</Link>
            <Link className="btn-calling">Заказать звонок</Link>
        </ul>
      </div>
      </div>
    </>
  );
};

export default BottomNavigation;
