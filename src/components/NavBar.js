import React from "react"
import { NavLink } from "react-router-dom"

const buttonStyles = {
  width: "100px",
  padding: "8px",
  margin: "0 5px 5px",
  background: "red",
  variant: "dark",
  textDecoration: "none",
  color: "white"
};

function NavBar() {
  return (
  <div>
      <NavLink
        to="/"
        exact
        style={buttonStyles}
        activeStyle={{
          background: "red",
        }}
        >
          MovieInfo    
      </NavLink>
      <NavLink
        to="/reviews"
        exact
        style={buttonStyles}
        activeStyle={{
          background: "red",
        }}
      >
        Reviews
      </NavLink>
  </div>
  )
}



export default NavBar