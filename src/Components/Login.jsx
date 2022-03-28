import React from 'react'

export const Login = () => {
    const [formDetails, setFormDetails] = React.useState({
        email: "",
        password: ""
    })

    const handleChange = (e) =>{
        const {name, value} = e.target;
        
        setFormDetails({
            ...formDetails,
            [name] : value
        })

    }

    const {email,password} = formDetails;
  return (
    <div>
        <form onSubmit = {handleSubmit}>
        <h1>Login Page</h1>
        <input type="text" placeholder='Email' value={email} onChange={handleChange}/>
        <br/>
        <input type="text" placeholder='password' value={password} onChange={handleChange}/>
         <br/>
         <input type="Submit"  value="Login"/>
         </form>
    </div>
  )
}
