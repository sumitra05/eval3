import React from 'react'
import { Link } from 'react-router-dom'
import styled from "styled-components"

const StyledLink = styled(Link)`
    text-decoration: none;
    margin: 5px;
    color: teal;
`;

export const Nav = () => {
  return (
    <div>
     <StyledLink to="/">Home</StyledLink>
     <StyledLink to="/login">Login</StyledLink>
     <StyledLink to="/register">Register</StyledLink>
     <StyledLink to="/products">Products</StyledLink>
   </div>
  )
}

export default Nav;
