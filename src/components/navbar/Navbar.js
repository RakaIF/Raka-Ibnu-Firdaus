import React from 'react';
import './navbarStyle.css'
import logo from '../../img/foto.png';
import contacting from '../../img/comment.png';

const Navbar = () => {   
    return(
        <nav className="navbar">
            <img src={logo} alt="Logo" className='logo'/>
            <div className="desktopMenu">
                <a href='/' className="desktopMenuListItem">Home</a>
                <a href='/idAbout' className="desktopMenuListItem">About</a>
                <a href='/idGallery' className="desktopMenuListItem">Gallery</a>
                <a href='/idContact' className="desktopMenuListItem">Contact</a>
            </div>
            <button className="desktopMenuBtn">
                <img src={contacting} alt="button" className="desktopMenuImg"></img>
            </button>
        </nav>
    );
}

export default Navbar;