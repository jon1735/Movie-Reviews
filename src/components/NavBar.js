import React from "react"
import { NavLink } from "react-router-dom"

const buttonStyles = {
  width: "100px",
  padding: "8px",
  margin: "0 5px 5px",
  background: "black",
  variant: "dark",
  textDecoration: "none",
  color: "white"
}

function NavBar () {
  return (
  <div className="buttonLinks">
      <NavLink
        to="/"
        exact
        style={buttonStyles}
        activeStyle={{
          background: "black"
        }}
        >
          MovieInfo
      </NavLink>
      <NavLink
        to="/reviews"
        exact
        style={buttonStyles}
        activeStyle={{
          background: "black"
        }}
      >
        Reviews
      </NavLink>
  </div>
  )
}

export default NavBar
