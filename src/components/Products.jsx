import productsJSON from '../json/products.json'
import { StarIcon , AddToCartIcon , AddToFavoriteIcon } from '../img/icons.jsx'

export function ProductsResult({ products }) {

    console.log(products)

    return (
        products.map (product => (

            <div className= 'product' id= {product.id}>
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
                    <button className='addToFavorite'>
                        <AddToFavoriteIcon/>
                    </button>
                    <button className='addToCart'>
                        <AddToCartIcon/>
                    </button>
                </div>
            </div>


        ))
    )
}


export function NoProductsResult() {

    console.log(productsJSON)

    return (
        <h1>There is not products for this search</h1>
    )
}

export function Products() {

    const hasProducts = productsJSON.products.length > 0

    return (

        hasProducts ? (
            
                <ProductsResult products={productsJSON.products}/>
           
        ) :
            <NoProductsResult />
    )
}

export default Products