import React from 'react'
import './Navigationbar.css';
import {NavLink} from 'react-router-dom'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {FcBusinesswoman} from 'react-icons';

function Navigationbar() {
  return (
    <div>
        <Navbar expand="lg" className='navvv '>
        <Navbar.Brand >PLANNER</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto " variant='pills'>
        <ul className="navbar-nav  p3 ">
         <li className="nav-item home">
          <NavLink className="nav-link " 
           to='/'>Home</NavLink>
         </li> 
         <li className="nav-item cal">
          <NavLink className="nav-link" 
           to='/calender'>Calender</NavLink>
         </li> 
         <li className="nav-item work">
          <NavLink className="nav-link" 
           to='/mywork'
           >MyWork</NavLink>
         </li> 
         <li className="nav-item wid">
          <NavLink className="nav-link " 
           to='/widgets'>Widgets</NavLink>
         </li>  
      </ul>
      <Navbar.Brand ><img src='https://cdn-icons-png.flaticon.com/512/906/906345.png' width={"50px"} height={"50px"} className="img" /></Navbar.Brand>
          </Nav>
        </Navbar.Collapse>
      
    </Navbar>
      
    </div>
  )
}

export default Navigationbar