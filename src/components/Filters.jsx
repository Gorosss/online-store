
import { useState } from 'react'
import { FiveStarIcon , FourStarIcon , ThreeStarIcon , TwoStarIcon , OneStarIcon } from '../img/icons.jsx'
import { useFilters } from '../hooks/useFilters.jsx'
import categoriesJSON from '../json/Categories.json'
import {FiltersContext} from '../context/filters.jsx'

import Categories from './Categories.jsx'

export function Filters() {


    const { filters , setFilters } = useFilters()
    

      const handleChangeSearch = (ev) => {
        setFilters(prevState => ({
            ...prevState,
            productName: ev.target.value
        }))
      }

      const handleChangeMinPrice = (ev) => {
        setFilters(prevState => ({
            ...prevState,
            minPrice: ev.target.value
        }))
      }
      const handleChangeMaxPrice = (ev) => {
        setFilters(prevState => ({
            ...prevState,
            maxPrice: ev.target.value
        }))
      }
      const handleChangeRating4 = (ev) => {
        
        setFilters(prevState => ({
            ...prevState,
            minRating: 4
        }))
      }

      const handleChangeRating3 = (ev) => {
        
        setFilters(prevState => ({
            ...prevState,
            minRating: 3
        }))
      }

      const handleChangeRating2 = (ev) => {
        
        setFilters(prevState => ({
            ...prevState,
            minRating: 2
        }))
      }

      const handleChangeRating1 = (ev) => {
        
        setFilters(prevState => ({
            ...prevState,
            minRating: 1
        }))
      }

      
      const handleChangeCategory = (ev) => {

        const categoryIndex = filters.category.findIndex(c => c  === ev.target.name)

        if (categoryIndex >= 0){

            const categoriesToUpdate = structuredClone(filters.category)

            const updatedCategories = categoriesToUpdate.filter((item, index) => index !== categoryIndex)
            
            setFilters(prevState => ({
                ...prevState,
                category: updatedCategories
            }))

        }else {
            setFilters(prevState => ({
                ...prevState,
                category: [... prevState.category, ev.target.name ]
            }))
        }
        
      }
    return (
        <>
            <div className='search'>
                <label>Search product</label>
                <input onChange={handleChangeSearch} placeholder='' />
            </div>

            <div className='priceFilter'>
                <label>Price range</label>
                <div className='priceRange'> <input onChange={handleChangeMinPrice} placeholder='' /> -  <input onChange={handleChangeMaxPrice} placeholder='' /></div>
                
            </div>

            <div className='rating'>
                <label>Rating</label>
                <div>
                    <span onClick={handleChangeRating4}>  <FourStarIcon/> or more</span>
                    <span onClick={handleChangeRating3}> <ThreeStarIcon/> or more</span>
                    <span onClick={handleChangeRating2}> <TwoStarIcon/> or more</span>
                    <span onClick={handleChangeRating1}> <OneStarIcon/> or more</span>
                </div>
            </div>

            <div className='categories'>
                <label>Category</label>
                <div className='categoriesList'>
                    <Categories categoriesJSON={categoriesJSON} handleChangeCategory={handleChangeCategory}/>
                </div>
            </div>

        </>
    )
}

export default Filters