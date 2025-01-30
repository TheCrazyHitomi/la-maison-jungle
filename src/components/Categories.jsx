import "../styles/Categories.css"

export const Categories = ({categories, selectedCategory, setSelectedCategory}) => {



    return(
        <div>
            <label  className="lmj-category" >Catégorie :
                <select name="Catégorie" value={selectedCategory} onChange={e => setSelectedCategory(e.target.value)}>
                    <option value="">--</option>
                    {categories.map((category) => (
                        <option key={category}>{category}</option>
                    ))} 
                </select>
                <button onClick={() => setSelectedCategory("")}>Réinitialiser</button>
            </label>
        </div>
    )
}