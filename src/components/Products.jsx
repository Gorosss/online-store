import { StarIcon, AddToCartIcon } from '../img/icons.jsx'

import { useCart } from '../hooks/useCart.jsx'

export function ProductsResult({ products }) {

    const { addCart, cart } = useCart()

    console.log(cart)

    const productInCart = product => {
        return cart.find(p => p.id === product.id)
    }

    return (
        products.map(product => {

            const isInCart = productInCart(product)


            return (<div className='product' id={product.id}>
                <div className='imgDiv'>
                    <img src={product.thumbnail} alt={product.title} />
                </div>
                <div className='productInfo'>
                    <span className='title'>{product.title} </span>
                    <span className='description'>{product.description}</span>
                </div>
                <div className='rating'>
                    <span>
                        {product.rating}
                    </span>
                    <StarIcon />
                </div>
                <div className='price'>
                    <span>{product.price}</span>
                    <span className='euroSimbol'>€</span>
                </div>

                <div className='addTo'>
                    {
                        isInCart ?
                            (
                            <>
                                <button style={{ backgroundColor: 'rgb(131 191 228)' }} className='addToCart' onClick={() => addCart(product)}>
                                    <AddToCartIcon />
                                </button>
                                <span>Qty: {isInCart.quantity}</span>
                            </>
                            )
                            :
                            (<button className='addToCart' onClick={() => addCart(product)}>
                                <AddToCartIcon />
                            </button>)


                    }

                </div>
            </div>
            )


        })
    )
}


export function NoProductsResult() {


    return (
        <h1>There is not products for this search</h1>
    )
}

export function Products({ products }) {

    const hasProducts = products.length > 0

    return (

        hasProducts ? (

            <ProductsResult products={products} />

        ) :
            <NoProductsResult />
    )
}

export default Products