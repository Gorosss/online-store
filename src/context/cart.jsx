import { createContext , useState } from "react";

export const CartContext = createContext()

export function CartProvider ({children}){
    const [cart, setCart] = useState([])


    const addCart = product =>{
        const productCartIndex = cart.findIndex(p => p.id  === product.id)

        if (productCartIndex >= 0){
            const cartClone = structuredClone(cart)
            cartClone[productCartIndex].quantity +=1
            return setCart(cartClone)
        }

        setCart(prevState => ([
            ... prevState,{
                ... product,
                quantity: 1
            }
        ]))
    }

    const removeOneFromCart = product =>{

        if(product.quantity > 1){

            const productCartIndex = cart.findIndex(p => p.id  === product.id)
            const cartClone = structuredClone(cart)
            cartClone[productCartIndex].quantity -=1
            return setCart(cartClone)
        }

        setCart(cart.filter(p => p.id != product.id))
    }

    const removeFromCart = product =>{

        setCart(cart.filter(p => p.id != product.id))
    }

    const clearCart = () => {
        setCart([])
    }

    return(
        <CartContext.Provider value={{
            cart,
            addCart,
            removeOneFromCart,
            removeFromCart,
            clearCart}
        }>
            {children}
        </CartContext.Provider>
    )
}