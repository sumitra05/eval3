import React from 'react'
import { Link } from "react-router-dom";
export const Register = () => {
  return (
    <>
      <form onSubmit={handleSubmit}>
          <input type="text" placeholder='name'/><br/>
          <input type="text" placeholder='email'/><br/>
          <input type="password" placeholder='password'/><br/>
          <input type="text" placeholder='Username'/><br/>
          <input type="number" placeholder='Mobile number'/><br/>
          <input type="text" placeholder='Description'/><br/><br/>
          <input type="submit" value="SUBMIT"/>
      </form>
        <Link to="/login"><button>Redirect to Login</button></Link>
    </>
  )
}
