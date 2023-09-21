import { useContext, useState } from 'react'
import './css/App.css'
import './css/Navbar.css'
import './css/Products.css'
import './css/Filters.css'
import { ShopCartIcon , FavoriteIcon} from './img/icons.jsx'
import Products from './components/products.jsx'
import {FiltersContext} from './context/filters.jsx'
import Cart from './components/Cart'
import Filters from './components/Filters.jsx'


import productsJSON from './json/products.json'

import {useFilters} from './hooks/useFilters.jsx'



function App() {

  
 
  const [products] = useState(productsJSON.products)
  const {filterProducts, setFilters} = useFilters()
  const filteredProducts = filterProducts(products)

  return (
    <div className='page'>

      <header>
        <div className='nav'>
          <div className='logo'>
            Online Store
          </div>
          <div className='search'>
            <form className='form' onSubmit={null}>
              <input onChange={null} placeholder='Find' />
              <button type='submit'> Search </button>
            </form>
          </div>
          <div className=''>
                     
              { <Cart /> }
            
          </div>
        </div>
      </header>

      <main>
        <div className='filters'>
          <Filters setFilters={setFilters}/>
        </div>
        <div className='products'>
          < Products products={filteredProducts}/>
        </div>
      </main>
    </div>
  )
}

export default App
