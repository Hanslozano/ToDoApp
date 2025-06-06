
export default function LoginForm() {

    return <form onSubmit={ (e) =>  {e.preventDefault(); const formData = new FormData(e.target) 
        console.log(formData.get("username"), formData.get("password"));
     } 
      }>

        <label htmlFor="username" >Username:</label> 
        <br />
        <input name="username" id="username" onChange={(e) =>{
            console.log(e.target.value);

        }} />

        <br />
        
        <label htmlFor="password" >Password:</label> 
        <br />
        <input name="password" id="password" type="password" />
        <br />

        <button>Submit</button>

    </form>
}