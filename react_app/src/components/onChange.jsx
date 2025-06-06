
import { useState } from "react"

export default function Profile() {

const [name, setName] = useState("")
const [guess, setGuess] = useState("0")
const [comment, setComment] = useState("")
const [payment, setPayment] = useState("")
const [shipping, setShipping] = useState("")





return (<div>

    <input value={name} onChange={ (e) => setName(e.target.value)} />

    <p>Name:{name}</p>
    
 <br />

    <input type="number" value={guess} onChange={(e) => setGuess(e.target.value)} />

    <p>Quantity:{guess}</p>

    <textarea value={comment} placeholder="Any comment?" onChange={(e) => setComment(e.target.value) } /> 

    <p>Comment:{comment}</p>


    <select value={payment} onChange={(e) => setPayment(e.target.value)}>

        <option value="">Select</option>
        <option value="Gcash">Gcash</option>
        <option value="Paymaya">Paymaya</option>

    </select>

    <p>Payment:{payment}</p>


    <label>
        
        <input type="radio" value="PickUp" checked = {shipping === "Pickup"} onChange={ (e) => setShipping(e.target.value)} />
        Pick Up

    </label>
<br />
    <label>
        
         <input type="radio" value="Delivery" checked = {shipping === "Delivery"} onChange={ (e) => setShipping(e.target.value)} />
        Delivery
        
    </label>

    <p>Shipping:{shipping}</p>

</div>)

}