
import { ShopCartIcon } from '../img/icons.jsx'
import { useId } from 'react'
import '../css/Cart.css'

import { useCart } from '../hooks/useCart.jsx'


import { StarIcon, AddToCartIcon } from '../img/icons.jsx'

export function CartProduct({ addCart, removeFromCart, thumbnail, title, rating, price, quantity }) {


    return (

        <div >

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
                <button className='' onClick={removeFromCart}>
                    -
                </button>

            </div>
        </div>
    )

}





export function Cart() {

    const cartCheckBoxId = useId()

    const { addCart, cart, clearCart, removeFromCart } = useCart()




    return (
        <>


            <label className='cartButton' htmlFor={cartCheckBoxId}>
                <ShopCartIcon />
            </label>
            <input id={cartCheckBoxId} type='checkbox' hidden />

            <aside className='cart'>
                {
                    cart.map(product => (
                        <CartProduct key={product.id} addCart={() => addCart(product)} removeFromCart={() => removeFromCart(product)}{...product} />


                    ))}
                <hr />
                <button className='clearButton' onClick={clearCart}>Clear</button>   
            </aside>
        </>
    )
}

export default Cart