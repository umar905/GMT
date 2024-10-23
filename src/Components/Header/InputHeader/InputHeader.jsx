import React from 'react'
import './InputHeader.css'
import SearchImage from '../../../images/HeaderImages/search.png'
const InputHeader = () => {
  return (
    <>
         <div class="search-container">
        <select class="category-select">
            <option value="all-categories">Все категории</option>
        </select>
        <input type="text" class="search-input" placeholder="Поиск" />
        <button class="search-button">
            <img src={SearchImage} alt="Search" />
        </button>
    </div>
    </>
  )
}

export default InputHeader
