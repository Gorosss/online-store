import { useState } from 'react'
import './css/App.css'
import './css/Navbar.css'
import './css/Products.css'
import './css/Filters.css'
import { ShopCartIcon , FavoriteIcon} from './img/icons.jsx'
import Products from './components/Products.jsx'
import Filters from './components/Filters.jsx'




function App() {

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
          <div className='search'>
          <button>
              <FavoriteIcon />
            </button>
            <button>
              <ShopCartIcon />
            </button>
          </div>
        </div>
      </header>

      <main>
        <div className='filters'>
          <Filters />
        </div>
        <div className='products'>
          < Products />
        </div>
      </main>
    </div>
  )
}

export default App
