import { React, useState } from 'react';
import {Link} from 'react-router-dom';
import './HeaderCSS.css';
export default function Header({ }){


    return(
        <nav className="navbar">
            <div className="navbar__logo">
                <i className="fab fa-accusoft"></i>
                <Link to="/">
                    <img style={{width: "7.5rem", height: "1.125rem"}} alt="안됨" src="../image/logo.png"></img>
                </Link>
            </div>

            <ul className="navbar_menu">
                <li><Link to="/aurora">오로라</Link></li>
                <li><Link to="/culture">문화</Link></li>
                <li><Link to="/eating">맛집</Link></li>
                <li><Link to="/tourist/nature">관광명소</Link></li>
                <li><Link to="/convenient-facilities/laundry">편의시설</Link></li>
            </ul>

            <div className="navbar_icons">
                <li><i className="fab fa-twitter"></i></li>
                <li><i className="fab fa-facebook-f"></i></li>
            </div>
        </nav>
    );
}
