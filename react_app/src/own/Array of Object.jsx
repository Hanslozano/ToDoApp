

import { useState } from "react";

function FoodType() {
    

    const [Food, setFood] = useState([]);
    
    const [Year, setYear] = useState(new Date().getFullYear())
    const [Type, setType] = useState("")
    const [Name, setName] = useState("")

function addFood() {

    const newFood = {
        NewYear: Year,
        NewType: Type,
        NewName: Name
    }

    setFood(prevFood => [...prevFood, newFood ])
    setType("")
    setName("")
}

// Remove existing food array by targeting the index

function removeFood(index) {
    setFood(Food.filter((_, i) => i !==index))
}


//Input Function

function yearFood(event) {
    setYear(event.target.value)
}

function typeFood(event) {
    setType(event.target.value)
}

function nameFood(event) {
    setName(event.target.value)
}

return(<div>

   <h2>What do you want to eat?</h2>

   <ul>

     {Food.map( (foods, index ) => 
     
     <li key={index} onClick={() => removeFood(index)}>
       In {foods.NewYear} i only want to eat {foods.NewType} like {foods.NewName}
     </li> 
    
    )}

   </ul>

   <input type="number" value={Year} onChange={yearFood}/>
    <br />

   <input type="text" placeholder="Type of food?"  value={Type} onChange={typeFood}/>  
   <br />

   <input type="text" placeholder="What Food?" value={Name} onChange={nameFood}/> <br />


   <button onClick={addFood}>Add Food</button>
   
</div>)

}


export default FoodType