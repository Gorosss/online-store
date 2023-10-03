
import { ShopCartIcon } from '../img/icons.jsx'
import { useId } from 'react'
import '../css/Cart.css'

import { useCart } from '../hooks/useCart.jsx'


import { StarIcon, AddToCartIcon } from '../img/icons.jsx'

export function CartProduct({ addCart, removeFromCart,removeOneFromCart, thumbnail, title, rating, price, quantity }) {


    return (

        <div className='cartProduct'>

            <div className=''>
                <img src={thumbnail} alt={title} />
            </div>
            <div className=''>
                <span className=''>{title} </span>
            </div>
            <div className=''>
                <span>
                    {rating}
                </span>
                <StarIcon />
            </div>
            <div className=''>
                <span>{price}</span>
                <span className=''>€</span>
            </div>

            <div className=''>
                <span>Qty: {quantity} </span>
                <button className='' onClick={addCart}>
                    +
                </button>
                <button className='' onClick={removeOneFromCart}>
                    -
                </button>
                <button className='' onClick={removeFromCart}>
                    Delete Item
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
                {
                    cart.map(product => (
                        <CartProduct key={product.id} addCart={() => addCart(product)} removeFromCart={() => removeFromCart(product)} removeOneFromCart={() => removeOneFromCart(product)}{...product} />

                        
                    ))}
                <hr />
                <button className='clearButton' onClick={clearCart}>Clear</button>   
            </aside>
        </>
    )
}

export default Cart