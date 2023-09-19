
export function Filters() {
    return (
        <>
            <div>
                <label>Searc product</label>
                <input onChange={null} placeholder='' />
            </div>

            <div>
                <label>Price range</label>
                <input onChange={null} placeholder='' /> -  <input onChange={null} placeholder='' />
            </div>

            <div>
                <label>Rating</label>
                <div>
                </div>
            </div>

            <div>
                <label>Category</label>
                <input onChange={null} placeholder='' />
            </div>

            <div>
                <label>Brand</label>
                <input onChange={null} placeholder='' />
            </div>
        </>
    )
}

export default Filters