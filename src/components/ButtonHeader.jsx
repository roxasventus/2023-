import React from 'react';
import './ButtonHeaderCSS.css';

import {BrowserRouter, Route, Routes, Outlet, Link} from 'react-router-dom';

export default function ButtonHeader() {
  return(

    <nav className="navbar">
            <div style={{
                width:"16%"
            }}></div>
            <ul className="navbar_menu">
                <li><Link to="/convenient-facilities/laundry">👕세탁방👕</Link></li>
                <li><Link to="/convenient-facilities/koreanmart">🥘한인마트🥘</Link></li>
                <li><Link to="/convenient-facilities/bar">🍻주류 백화점🍻</Link></li>
                <li><Link to="/convenient-facilities/mart">🍑마트🍑</Link></li>
                <li><Link to="/convenient-facilities/accommodation">🏠숙소🏠</Link></li>
            </ul>

            <div className="navbar_icons">
                <li><i className="fab fa-twitter"></i></li>
                <li><i className="fab fa-facebook-f"></i></li>
            </div>
      </nav>

  );
}