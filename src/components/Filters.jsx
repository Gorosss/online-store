
import { FiveStarIcon , FourStarIcon , ThreeStarIcon , TwoStarIcon , OneStarIcon } from '../img/icons.jsx'


export function Filters() {
    return (
        <>
            <div className='search'>
                <label>Searc product</label>
                <input onChange={null} placeholder='' />
            </div>

            <div className='priceFilter'>
                <label>Price range</label>
                <div className='priceRange'> <input onChange={null} placeholder='' /> -  <input onChange={null} placeholder='' /></div>
                
            </div>

            <div className='rating'>
                <label>Rating</label>
                <div>
                    <span> <FiveStarIcon/> or more</span>
                    <span>  <FourStarIcon/> or more</span>
                    <span> <ThreeStarIcon/> or more</span>
                    <span> <TwoStarIcon/> or more</span>
                    <span> <OneStarIcon/> or more</span>
                </div>
            </div>

            <div className='category'>
                <label>Category</label>
                <input onChange={null} placeholder='' />
            </div>

            <div className='brand'>
                <label>Brand</label>
                <input onChange={null} placeholder='' />
            </div>
        </>
    )
}

export default Filters