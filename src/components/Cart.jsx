
import { ShopCartIcon } from '../img/icons.jsx'
import { useId } from 'react'
import '../css/Cart.css'

import { useCart } from '../hooks/useCart.jsx'


import { StarIcon, RubbishBinIcon } from '../img/icons.jsx'

export function CartProduct({ addCart, removeFromCart,removeOneFromCart, thumbnail, title, rating, price, quantity }) {


    return (

        

        
        
        <div className='cartProduct'>

            <div className='imgDiv'>
                <img src={thumbnail} alt={title} />
            </div>
            <div className='productInfo'>
                <span className='title'>{title} </span>
            </div>
            <div className='rating'>
                <span>
                    {rating}
                </span>
                <StarIcon />
            </div>
            <div className='price'>
                <span>{price}</span>
                <span className='euroSimbol'>€</span>
            </div>

            <div className='quantity'>
                <span>Qty: {quantity} </span>
                <button onClick={addCart}>
                    +
                </button>
                <button onClick={removeOneFromCart}>
                    -
                </button>
                
            </div>
            <div className='rubbishBinIcon'>
                    <button  onClick={removeFromCart}>
                    <RubbishBinIcon />
                </button>
            
            </div>
        </div>
        
    )

}





export function Cart() {

    const cartCheckBoxId = useId()

    const { addCart, cart, clearCart, removeFromCart , removeOneFromCart} = useCart()




    return (
        <>


            <label className='cartButton' htmlFor={cartCheckBoxId}>
                <ShopCartIcon />
            </label>
            <input id={cartCheckBoxId} type='checkbox' hidden />

            <aside className='cart'>
                <label className='productPageCarButton' htmlFor={cartCheckBoxId}>
                    <ShopCartIcon />
            </label>
                {
                    cart.map(product => (
                        <CartProduct key={product.id} addCart={() => addCart(product)} removeFromCart={() => removeFromCart(product)} removeOneFromCart={() => removeOneFromCart(product)}{...product} />

                        
                    ))}
                <hr />

                <div className='clearButton'>  
                    <button onClick={clearCart}>Clear</button>   

                
                </div>
            </aside>
        </>
    )
}

export default Cart