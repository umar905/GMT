import React from 'react'
import Header from '../../Components/Header/Header/Header'
import SliderForLaptop from '../../Components/Slider/SliderForLaptop/SliderForLaptop'
import Categories from '../../Components/Categories/Categories'
import SecondSlider from '../../Components/SecondSlider/SecondSlider'

const Home = () => {
  return (
    <>
        <Header/>
        <SliderForLaptop/>
        <Categories/>
        <SecondSlider/>
    </>
  )
}

export default Home
