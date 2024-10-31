import React from 'react'
import Header from '../../Components/Header/Header/Header'
import SliderForLaptop from '../../Components/Slider/SliderForLaptop/SliderForLaptop'
import Categories from '../../Components/Categories/Categories'
import SecondSlider from '../../Components/SecondSlider/SecondSlider'
import CategoriesSlider from '../../Components/CategoriesSlider/CategoriesSlider'
import BrendsSlider from '../../Components/BrendsSlider/BrendsSlider'
import AccordionSection from '../../Components/AccordionSection/AccordionSection'
import Mapsection from '../../Components/Mapsection/Mapsection'
const Home = () => {
  return (
    <>
        <Header/>
        <SliderForLaptop/>
        <Categories/>
        <SecondSlider/>
        <CategoriesSlider/>
        <BrendsSlider/>
        <AccordionSection/>
        <Mapsection/>
    </>
  )
}

export default Home
