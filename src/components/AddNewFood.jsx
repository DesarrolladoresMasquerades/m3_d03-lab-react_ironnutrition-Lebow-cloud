import {useState} from "react"

export default function NewFood(props){

const [newFoodList, setNewFood] = useState({
    name: "",
    image: "",
    calories:0,
    servings: 0
})

    function handleDataChange(e){

    const inputname = e.target.name
    let value = e.target.value

    setNewFood({...newFoodList, [inputname]: value})
    }

    function handleSummit(e){
        e.preventDefault()
        props.newFood(newFoodList)
        setNewFood({

            name: "",
            image: "",
            calories:"",
            servings:""
        })

    }

    return(
        <div>
            <h4>Add a New Food</h4>
            <form onSubmit = {handleSummit}>
                <label>Name:</label>
                <input type="text" name ="name" value={newFoodList.name} onChange={handleDataChange}/>
                <label>Image:</label>
                <input type="text" name ="image" value= {newFoodList.image} onChange={handleDataChange}/>
                <label>Calories:</label>
                <input type="number" name ="calories" value= {newFoodList.calories} onChange={handleDataChange}
                />
                <label>Servings:</label>
                <input type="number" name ="servings" value= {newFoodList.servings} onChange={handleDataChange}/>

                <button type="submit">Create</button>
            </form>
        </div>
    )
}