import React from "react";
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

import "./Navbar.css";
import  { useState } from 'react';

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <>


      <div className="Navbar">
        <div className="Navbar_link">
          <div className="Navbar_link_logo">VISHAL</div>
          <div className="Navbar_link_container">
                <p><a href="/home">Home</a></p>
                <p><a href="/about">About Us</a></p>
                <p><a href="/contact">contact</a></p>
                <p><a href="/visit">visit</a></p>
                <p><a href="/call">call</a></p>
          </div>
        </div>
        <div className="Navbar_sign">
        
        <button type="button">Sign up</button>
        </div>
        <div className="Navbar_menu">
        {toggleMenu
          ? <RiCloseLine color="white" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="white" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="Navbar_menu_container scale-up-center">
          <div className="Navbar_menu_container_links">
                <p><a href="/home">Home</a></p>
                <p><a href="/about">About Us</a></p>
                <p><a href="/contact">contact</a></p>
                <p><a href="/visit">visit</a></p>
                <p><a href="/call">call</a></p>
          </div>
          <div className="Navbar_menu_container_links_sign">
            
            <button type="button">Sign up</button>
          </div>
        </div>
        )}

        </div>
      </div>
    </>
  );
};

export default Navbar;
