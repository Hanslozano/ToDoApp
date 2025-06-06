
import { useState } from "react"

function Foods () {

    const [food, setFood]= useState (["Apple", "Banana", "Grapes"]);

    function addFruits() {

        const newFood = document.getElementById("AddFood").value;
        document.getElementById("AddFood").value = "";

        setFood([...food, newFood ])
    
        
    }


        function removeFruits(index) {
            setFood(food.filter((_, i) => i !==index))
        }
        
    return (
        <div>
            <ul>
                
                {food.map( (foods, index) => <li key={index} onClick={() => removeFruits(index)}> {foods} </li>) }
                
            </ul>

            <input type="text" id="AddFood" placeholder="Add fruits"></input>


            <button onClick={addFruits}>Add</button>
        </div>
    )


}

export default Foods