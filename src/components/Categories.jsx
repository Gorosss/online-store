

export function Categories ({ categoriesJSON , handleChangeCategory, filterCategory}) {

    const categories =  categoriesJSON

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }


    const categoriFormat = (category) => {


        return capitalizeFirstLetter(category.replace('-', ' '))
    }


    return(
        <>
            {
        categories.map((category, index) => (
            
            <div className='category'> 
                <input type="checkbox" name={category} onChange={handleChangeCategory} checked={filterCategory.includes(category)}/> <a name={category} onClick={handleChangeCategory}>{categoriFormat(category)}</a>
            </div>
            
        ))

            }

        </>


    )
}

export default Categories 