import React from 'react'
import './TopHeader.css'
import { Link } from 'react-router-dom'
const TopHeader = () => {
  return (
    <>
        <div className="header-top">

        <div className="container headertop">
            <ul className="topHeaderLeft">
                <Link to={'/about'}>
                    О компании
                </Link>    
                <Link to={'/about'}>
                    Доставка
                </Link>    
                <Link to={'/about'}>
                Оплата
                </Link>    
                <Link to={'/about'}>
                Гарантии
                </Link>    
                <Link to={'/about'}>
                Блог
                </Link>    
            </ul>

            <ul className='topHeaderLeft'>
                <Link to={'info@mail.ru'}>
                    info@mail.ru
                </Link>
                <Link to={"г. Москва, ул. Московская, д. 35"}>
                г. Москва, ул. Московская, д. 35
                </Link>
            </ul>
        </div> 
        </div>
    </>
  )
}

export default TopHeader
