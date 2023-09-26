
import { useContext } from 'react'
import {FiltersContext} from '../context/filters.jsx'

export function useFilters () {
   

    const {filters, setFilters }= useContext(FiltersContext)

    const regexPattern = new RegExp(filters.productName, 'i');
  
    const filterProducts = (products) => {
      return products.filter(product => {
          return(
            (filters.productName === '' ||  (regexPattern.test(product.title) || regexPattern.test(product.description))) && 
            (product.price >= filters.minPrice && product.price <= filters.maxPrice) &&
            (product.rating >= filters.minRating) &&
            (filters.category.length === 0 || filters.category.includes(product.category)) && 
            (filters.brand === '' || filters.brand === product.brand) 
          )
      })
    }
    return {filterProducts, setFilters , filters}
  }

export default useFilters