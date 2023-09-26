

export function Categories ({ categoriesJSON , handleChangeCategory}) {

    const categories =  categoriesJSON

    const handleChageCheckBox = (ev)=>{
        const inputElement = ev.target.previousSibling.previousSibling;
        console.log(inputElement.value)

    if (inputElement && inputElement.tagName === 'INPUT') {
      inputElement.checked = !inputElement.checked;
      const event = new Event('change', { bubbles: true, cancelable: true });
      inputElement.dispatchEvent(event);
    } 
    }

    return(
        <>
            {
        categories.map((category, index) => (
            
            <div className='category'> 
                <input type="checkbox" name={category} onChange={handleChangeCategory}/> <a name={category} onClick={handleChangeCategory}>{category}</a>
            </div>
            
        ))

            }

        </>


    )
}

export default Categories 