
import { useState } from 'react'
import { FiveStarIcon , FourStarIcon , ThreeStarIcon , TwoStarIcon , OneStarIcon } from '../img/icons.jsx'
import { useFilters } from '../hooks/useFilters.jsx'

export function Filters() {


    const { filters, setFilters } = useFilters()
    


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
      const handleChangeRating = (minRate) => {
        setFilters(prevState => ({
            ...prevState,
            minRating: minRate
        }))
      }
      const handleChangeCategory = (ev) => {
        setFilters(prevState => ({
            ...prevState,
            category: ev.target.value
        }))
      }
      const handleChangeBrand = (ev) => {
        setFilters(prevState => ({
            ...prevState,
            brand: ev.target.value
        }))
      }

    return (
        <>
            <div className='search'>
                <label>Searc product</label>
                <input onChange={handleChangeSearch} placeholder='' />
            </div>

            <div className='priceFilter'>
                <label>Price range</label>
                <div className='priceRange'> <input onChange={handleChangeMinPrice} placeholder='' /> -  <input onChange={handleChangeMaxPrice} placeholder='' /></div>
                
            </div>

            <div className='rating'>
                <label>Rating</label>
                <div>
                    <span onClick={null}> <FiveStarIcon/> or more</span>
                    <span onClick={null}>  <FourStarIcon/> or more</span>
                    <span onClick={null}> <ThreeStarIcon/> or more</span>
                    <span onClick={null}> <TwoStarIcon/> or more</span>
                    <span onClick={null}> <OneStarIcon/> or more</span>
                </div>
            </div>

            <div className='category'>
                <label>Category</label>
                <input onChange={handleChangeCategory} placeholder='' />
            </div>

            <div className='brand'>
                <label>Brand</label>
                <input onChange={handleChangeBrand} placeholder='' />
            </div>
        </>
    )
}

export default Filters