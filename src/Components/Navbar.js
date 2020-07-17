import React from "react";
import {Link,NavLink,withRouter} from 'react-router-dom'
const Navbar = (props) => {
  return (
    <nav className="nav navbar-wrapper red darken-3">
      <div className="container">
        <a className="brand-logo">Poke'Times</a>
        <ul className="right">
          <li><Link to="/">Home </Link></li>
          <li><NavLink to="/about">About </NavLink></li>
          <li><NavLink to="/contact">Contact </NavLink></li>
          {
            //difference of nav and navlink is 
            // we will get active class to the respected component when we use navlink
            // we will not get the active class with link
          }
        </ul>
      </div>
    </nav>
  )
}
export default withRouter(Navbar);