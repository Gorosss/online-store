import { createContext , useState} from "react";

export const FiltersContext = createContext()


export function FiltersProvider( {children} ){

    const [filters, setFilters] = useState({
        productName: '',
        minPrice: 0,
        maxPrice: 9999,
        minRating: 0,
        category: 'all',
        brand: ''
      })

    return (
        <FiltersContext.Provider value={{
            filters,
            setFilters
        }}>
            {children}
        </FiltersContext.Provider>
    )
}