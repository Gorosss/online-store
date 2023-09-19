import productsJSON from '../json/products.json'

export function ProductsResult({ products }) {

    console.log(products)

    return (
        products.map (product => (

            <div className= 'product' id= {product.id}>
                <div><img src={product.thumbnail} alt={product.title} /></div>
                {product.title}-
                {product.price}-
                {product.discountPercentage}-
                {product.rating}-
                {product.description}
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