import React from 'react';
import '../App.css';
import { useState } from 'react';
import SubBanner from '../components/SubBanner';
import Top from '../components/Top';

import Picture from '../components/Picture';

import photo from "../image/image.jpg"
import photo2 from "../image/image2.jpg"
import photo3 from "../image/image3.jpg"
import photo4 from "../image/image4.jpg"

import { Link, Outlet } from 'react-router-dom';

import { Swiper, SwiperSlide } from "swiper/react"; // basic
import SwiperCore, { Pagination, paginationStyleItem } from "swiper";
import "swiper/css"; //basic
import "swiper/css/navigation";
import "swiper/css/pagination";

SwiperCore.use([Pagination]);

export default function TouristPage() {

  return(
    <div>
      <Swiper
          style={{
            width: "100%",
            height: "727px",
            backgroundColor: "#FFFFFF",
            borderRadius: "12px",
            margin: "auto"
          }}
          spaceBetween={130}
          slidesPerView={1}
          pagination={{ clickable: true}} //*
          paginationStyleItem={{ width:10, height:10, borderRadius:10 }}
        >
          <SwiperSlide> <Picture src={photo}/> </SwiperSlide>
          <SwiperSlide> <Picture src={photo2}/> </SwiperSlide>
          <SwiperSlide> <Picture src={photo3}/> </SwiperSlide>
          <SwiperSlide> <Picture src={photo4}/> </SwiperSlide>
        </Swiper>
        <div style={{marginTop: "309px"}}>
          <SubBanner text="인버카길 관광명소"/>
        </div>

        <Top text="관광명소 Top3" image1={photo} image2={photo2} image3={photo3} 
        article1="Oreti Beach 20 Don Street, Invercargill 9810" 
        article2="Stadium Southland Surrey Park Road, Glengarry, Invercargill 9810" 
        article3="Invercargill Water Tower 101 Doon Street, Invercargill 9810"
        />


        <nav className="navbar">
            <div className="navbar__logo">
                <i className="fab fa-acscusoft"></i>
                <Link to="#"></Link>
            </div>

            <ul className="navbar_menu">
                <li><Link to="/tourist/nature">자연</Link></li>
                <li><Link to="/tourist/activity">액티비티</Link></li>
                <li><Link to="/tourist/attraction">볼거리</Link></li>
            </ul>

            <div className="navbar_icons">
                <li><i className="fab fa-twitter"></i></li>
                <li><i className="fab fa-facebook-f"></i></li>
            </div>
      </nav>

      <Outlet />
    </div>   
  );
}