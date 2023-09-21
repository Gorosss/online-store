
import { ShopCartIcon , FavoriteIcon } from '../img/icons.jsx'
import { useId } from 'react'
import '../css/Cart.css'


import { StarIcon , AddToCartIcon , AddToFavoriteIcon } from '../img/icons.jsx'



export function Cart() {

    const cartCheckBoxId = useId()
    const favCheckBoxId = useId()
    return (
        <>  
            <label className='favButton' htmlFor={favCheckBoxId}>
                <FavoriteIcon />
            </label>
            <input id={favCheckBoxId} type='checkbox' hidden />

            <label className='cartButton' htmlFor={cartCheckBoxId}>
                <ShopCartIcon />
            </label>
            <input id={cartCheckBoxId} type='checkbox' hidden />

            <aside className='cart'>
                <div>
                    
                </div>
                <div className='' >
                    <div className=''>
                        <img src='https://i.dummyjson.com/data/products/1/thumbnail.jpg' alt='{product.title}' />
                    </div>
                    <div className=''>
                        <span className=''>Title </span>
                        <span className=''>Descrip</span>
                    </div>
                    <div className=''>
                        <span>
                            Rating
                        </span>
                        <StarIcon />
                    </div>
                    <div className=''>
                        <span>Price</span>
                        <span className=''>€</span>
                    </div>

                    <div className=''>
                        <button className=''>
                            <AddToFavoriteIcon />
                        </button>
                        <button className=''>
                            <AddToCartIcon />
                        </button>
                    </div>
                </div>



            </aside>
        </>
    )
}

export default Cart