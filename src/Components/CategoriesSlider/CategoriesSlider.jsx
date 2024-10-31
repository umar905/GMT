import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React, { useRef, useState } from "react";
import "./CategoriesSlider.css";
const CategoriesSlider = () => {
  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // Tablets and small desktops
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          // dots: true,
        },
      },
      {
        breakpoint: 768, // Tablets in portrait mode
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 670, // Mobile phones
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="container">
      <div className="slider-container slides_category">
      <h1>Каталог товаров</h1>
      <br />
        <Slider
          ref={(slider) => {
            sliderRef = slider;
          }}
          {...settings}
          className="slider-wrapper"
        >
          <div key={1} className="slide-category">
            <div className="imgslidediv">
              <img src="./img/img6.png" alt="" />
            </div>
            <div className="infolabaratoryslide infolabaratoryslide2">
              <h3>Анализатор мочи MIND UA-66</h3>
              <p>Артикул: 213134 <br /> В наличии</p>
              <h3>300 000 руб.</h3>
              <button>Добавить в корзину</button>
            </div>
          </div>
          <div key={2} className="slide-category">
            <div className="imgslidediv">
              <img src="./img/img1.png" alt="" />
            </div>
            <div className="infolabaratoryslide infolabaratoryslide2">
              <h3>Анализатор мочи MIND UA-66</h3>
              <p>Артикул: 213134 <br /> В наличии</p>
              <h3>300 000 руб.</h3>
              <button>Добавить в корзину</button>
            </div>
          </div>
          <div key={3} className="slide-category">
            <div className="imgslidediv">
              <img src="./img/img4.png" alt="" />
            </div>
            <div className="infolabaratoryslide infolabaratoryslide2">
              <h3>Анализатор мочи MIND UA-66</h3>
              <p>Артикул: 213134 <br /> В наличии</p>
              <h3>300 000 руб.</h3>
              <button>Добавить в корзину</button>
            </div>
          </div>
          <div key={4} className="slide-category">
            <div className="imgslidediv">
              <img src="./img/img5.png" alt="" />
            </div>
            <div className="infolabaratoryslide infolabaratoryslide2">
              <h3>Анализатор мочи MIND UA-66</h3>
              <p>Артикул: 213134 <br /> В наличии</p>
              <h3>300 000 руб.</h3>
              <button>Добавить в корзину</button>
            </div>
          </div>
          <div key={5} className="slide-category">
            <div className="imgslidediv">
              <img src="./img/imag3.png" alt="" />
            </div>
            <div className="infolabaratoryslide infolabaratoryslide2">
              <h3>Анализатор мочи MIND UA-66</h3>
              <p>Артикул: 213134 <br /> В наличии</p>
              <h3>300 000 руб.</h3>
              <button>Добавить в корзину</button>
            </div>
          </div>
          <div key={6} className="slide-category">
            <div className="imgslidediv">
              <img src="./img/img7.png" alt="" />
            </div>
            <div className="infolabaratoryslide infolabaratoryslide2">
              <h3>Анализатор мочи MIND UA-66</h3>
              <p>Артикул: 213134 <br /> В наличии</p>
              <h3>300 000 руб.</h3>
              <button>Добавить в корзину</button>
            </div>
          </div>
        </Slider>
        <div style={{ textAlign: "left" }} className="nextprev">
          <button className="prev" onClick={previous}>
            <img src="./img/prev.svg" alt="" />
          </button>
          <button className="next" onClick={next}>
            <img src="./img/next.svg" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategoriesSlider;
