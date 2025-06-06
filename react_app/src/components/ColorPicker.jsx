import { useState } from "react";


export default function ColorPicker() {

const [color, setColor] = useState("#FFFFF")
const [textColor, setTextColor] = useState("#FFFFF")

return(<div className="Container" >

        <h1 style={{color: textColor}} >Color Picker</h1>
        <div className="ColorSelector" style={{background: color, color: textColor}} >
            <label>Select a Color: {color}</label>
        </div>

        <input type="color" value={color} onChange={(event) => setColor(event.target.value) } ></input>

        <input type="color" value={textColor} onChange={(event) => setTextColor(event.target.value) } ></input>
</div>)

}