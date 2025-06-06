import { useState } from "react"

export default function RegisterForm() {
    
     const [Fullname, setFullname] = useState("");
     const [Email, setEmail] = useState("");
     const [Password, setPassword] = useState("")
     
     
    const isDisabled = !Fullname || !Email || !Password; 

    return(

     <form>

        <div>

        <label htmlFor="Fullname">Fullname:</label>

        <br />

        <input id="Fullname" value={Fullname} 
        onChange={ (e) => setFullname(e.target.value)} />

        <br />

        <label htmlFor="Email">Email:</label>
        <br />
        <input id="Email" value={Email} onChange={ (e) => setEmail(e.target.value) } />

         <br />

        <label htmlFor="Password">Password:</label>
        <br />
        <input type="Password" id="Password" value={Password} onChange={ (e) => setPassword(e.target.value) } />

         <br />

        <label htmlFor="DisplayName">Display name:{Fullname}</label>
        
        </div>

        <div>
            
            <span>Email:{Email}</span>   <br />
            <span>Password:{Password}</span>
            
        </div>

        <button disabled ={isDisabled} >Submit</button>

     </form>
    )
}