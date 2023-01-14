import React from 'react';
import '../components/HeaderCSS.css';
import { useState } from 'react';
import Banner from '../components/Banner';
import {BrowserRouter, Route, Routes, Outlet, Link} from 'react-router-dom';
import ButtonHeader from '../components/ButtonHeader';

export default function ConvenientPage() {
  return(
  <>
    <div className="App" style={{flexDirection: "row"}}>
      <Banner text="편의시설"/>
    </div>  

      <ButtonHeader/>

      <Outlet />
  </>
  );
}