import React from "react";
import { Link } from 'react-router-dom'
import './header.css'


const Header = () => {
    return(
        <nav className="header">
            <Link to = '/'>All pokemons</Link>
            <Link to = '/help'>Help</Link>
            <Link to = '/contacts'>Contacts</Link>
        </nav>
    )
}

export default Header;
