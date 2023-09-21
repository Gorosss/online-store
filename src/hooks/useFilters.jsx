
import { useContext } from 'react'
import {FiltersContext} from '../context/filters.jsx'

export function useFilters () {
   

    const {filters, setFilters }= useContext(FiltersContext)
  
    const filterProducts = (products) => {
      return products.filter(product => {
          return(
             
            (filters.productName === '' || filters.productName === product.title) && 
            (product.price >= filters.minPrice && product.price <= filters.maxPrice) &&
            (product.rating >= filters.minRating) &&
            (filters.category === 'all' || filters.category === product.category) && 
            (filters.brand === '' || filters.brand === product.brand) 
          )
      })
    }
    return {filterProducts, setFilters}
  }

export default useFilters