export const Categories = ({categories}) => {

    return(
        <select name="" id="">
        <option>
            <ul>
                {categories.map((cat) => (
                    <li key={cat}>{cat}</li>
                ))}
            </ul>
        </option>
        </select>
    )
}