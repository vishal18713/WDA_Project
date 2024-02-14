import React from 'react'
import { Logo,Nav, Navcontainer,MobileIcon,NavMenue,NavLinks,Navitem } from './Navbar.js';
import { FaBarsStaggered as Bars } from "react-icons/fa6";

const Navbar = () => {
  return (
    <>
    <Nav>
        <Navcontainer>
            <Logo to='/'>vishal</Logo>
            <MobileIcon>
                <Bars></Bars>
            </MobileIcon>
            <NavMenue>
                <Navitem>
                    <NavLinks to='/'>About</NavLinks>
                </Navitem>
                <Navitem>
                    <NavLinks to='/'>About</NavLinks>
                </Navitem>
                <Navitem>
                    <NavLinks to='/'>About</NavLinks>
                </Navitem>
            </NavMenue>
        </Navcontainer>
    </Nav>
    </>
  )
}

export default Navbar