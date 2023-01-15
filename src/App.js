//import logo from './logo.svg';
import React from 'react';
import {BrowserRouter, Route, Routes, Outlet} from 'react-router-dom';
import HomePage from './pages/home';
import ConvenientPage from './pages/convenient-facilities';
import CulturePage from './pages/culture';
import TouristPage from './pages/tourist';
import AuroraPage from './pages/aurora';
import EatingPage from './pages/eating';
import Accommodation from './pages/convenient/accommodation';
import ATM from './pages/convenient/ATM';
import Bar from './pages/convenient/bar';
import Cafe from './pages/convenient/cafe';
import Koreanmart from './pages/convenient/koreanmart';
import Laundry from './pages/convenient/laundry';
import Mart from './pages/convenient/mart';

import Nature from './pages/tourist/nature';
import Activity from './pages/tourist/activity';
import Attraction from './pages/tourist/attraction';

import Header from './components/Header';
import './App.css';


function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/aurora" element={<AuroraPage />} />
          <Route path="/culture" element={<CulturePage />} />
          <Route path="/eating" element={<EatingPage />} />
          <Route path="/tourist" element={<TouristPage />}>
            <Route path="nature" element={<Nature />} />
            <Route path="activity" element={<Activity />} />
            <Route path="attraction" element={<Attraction />} />
          </Route>
          <Route path="/convenient-facilities" element={<ConvenientPage /> } >
            <Route path="laundry" element={<Laundry />} />
            <Route path="koreanmart" element={<Koreanmart />} />
            <Route path="bar" element={<Bar />} />
            <Route path="mart" element={<Mart />} />
            <Route path="accommodation" element={<Accommodation />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
    
}

export default App;
