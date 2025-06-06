import { useState } from "react";

export default function UseStatePractice() {

const [name, setName] = useState("Guess");

const anyName = () => {
    setName("Hans")
}

return(

<div>
<p>Name: {name}</p>
<button onClick={anyName}>Set Name</button>
</div>  
)


}
