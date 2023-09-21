
import { ShopCartIcon } from '../img/icons.jsx'


export function Cart () {
    return(
        <>
        <label htmlFor={cartCheckBoxId}>
            <ShopCartIcon/>
        </label>
        <input id={cartCheckBoxId} type='checkbox' hidden/>
        
        <aside className='cart'>

            

        </aside>
        </>
    )
}

export default Cart