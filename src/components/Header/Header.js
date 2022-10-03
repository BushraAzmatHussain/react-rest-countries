import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div  className='menu'>
            <nav className='menu-item'>
               <a href="/home">Home</a>
                <a href="/about">About</a>
                <a href="/contact">Contact</a>
                <a href="/footer">Footer</a>
            </nav>
        </div>
    );
};

export default Header;