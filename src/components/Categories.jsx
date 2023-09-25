import categoriesJSON from '../json/Categories.json'


export function Categories () {

    console.log(categoriesJSON)
    const categories =  categoriesJSON



    return(
        <>
            {
        categories.map((category, index) => (
            
            <div className='category'> 
                <input type="checkbox" /> <span>{category}</span>
            </div>
            
        ))

            }

        </>


    )
}

export default Categories 