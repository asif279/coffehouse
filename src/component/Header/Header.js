import React from 'react';

import './Header.css';
import logo from '../../assets/logo.png';
import { links } from '../../Data';
import {FaStream} from 'react-icons/fa';

const Header = () => {
    return (
        <div>
            <div className="header">
                <nav className="nav container">
                   <a href="/">
                    <img src={logo} className='nav_logo_img' alt="" />
                   </a>

                   <div className="nav-menu">
                    <ul className='nav_list'>
                        {
                            links.map(({name,path},index)=>{

                                return (
                                    <li className="navitem" key={index}>
                                        <a href={path} className="navlink">{name}</a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                   </div>
                   <div className="nav_toggle">
                    <FaStream/>
                   </div>
                </nav>
            </div>
        </div>
    );
};

export default Header;