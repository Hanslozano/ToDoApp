import { useState } from "react"

export default function CarModel() {

    const [car, setCar] = useState({Year:2025 , Make:"Dodge" , Model: "Demon" })


    return (
    
<div>
    
    <p>Your favorite car is:{car.Year} {car.Make} {car.Model}</p>


    <input value={car.Year} type="number" onChange={ (e) => setCar( car => ({...car, Year: e.target.value })  ) } />
<br />
    <input value={car.Make} type="text" onChange={ (e) => setCar( car => ({...car, Make: e.target.value}) ) }/>
<br />
    <input value={car.Model} type="text" onChange={ (e) => setCar( car => ({...car, Model: e.target.value}) ) }/>

</div>
    )

}