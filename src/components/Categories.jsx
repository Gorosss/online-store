

export function Categories ({ categoriesJSON , handleChangeCategory, filterCategory}) {

    const categories =  categoriesJSON


    return(
        <>
            {
        categories.map((category, index) => (
            
            <div className='category'> 
                <input type="checkbox" name={category} onChange={handleChangeCategory} checked={filterCategory.includes(category)}/> <a name={category} onClick={handleChangeCategory}>{category}</a>
            </div>
            
        ))

            }

        </>


    )
}

export default Categories 