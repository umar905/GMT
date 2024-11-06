import React from 'react'
import "./Footer.css"
const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
            <div className="footer_wrapper">
                <div className="navigationfooter">
                  <h2>Покупателям</h2>
                <div className="footnav">
                <ul>
                      <li>О компании</li>
                      <li>Сертификаты</li>
                      <li>Вакансии</li>
                      <li>Гарантии</li>
                      <li>О Услуги</li>
                      <li>Акции</li>
                      <li>Доставка</li>
                  </ul>
                  <ul>
                      <li>Оплата</li>
                      <li>Возврат</li>
                      <li>FAQ</li>
                      <li>Лизинг</li>
                      <li>Отзывы</li>
                      <li>Блог</li>
                  </ul>
                </div>
                </div>

                <div className="navigationfooter">
                  <h2>Каталог</h2>
                <div className="footnav">
                <ul>
                      <li>Реанимация</li>
                      <li>Хирургия</li>
                      <li>Офтальмология</li>
                      <li>Лабораторная диагностика</li>
                      <li>Акушерство и Гинекология</li>
                      <li>Гистология</li>
                      <li>Косметология</li>
                  </ul>
                  <ul>
                      <li>Орториноларингология</li>
                      <li>Рентгенология и томография</li>
                      <li>Стрерилизация</li>
                      <li>Физиотерапия и реабилитация</li>
                      <li>Функциональная диагностика</li>
                      <li>Эндоскопия</li>
                  </ul>
                  <ul>
                      <li>Новинки</li>
                      <li>Распродажи</li>
                      <li>Кабинеты под ключ</li>
                      <li>Скачать каталог</li>
                  </ul>
                </div>
                </div>


                <div className="navigationfooter">
                  <h2>Контакты</h2>
                <div className="footnav">
                <ul>
                      <li><span>Адрес</span> <br />г. Москва, ул. Московская, д. 35 </li>
                      <li>Карта проезда</li>
                      <li>График работы:</li>
                      <li>Пн-Пт с 09:00-19:00, </li>
                      <li>Сб-Вс - выходной</li>
                      <br />
                      <br />
                      <br />
                      <li>+7 000-000-00-00</li>
                      <li>+7 495-000-00-00</li>
                      <li>8 800-000-00-00</li>
                      <li>info@mail.ru</li>
                  </ul>
                </div>
                </div>
            </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
