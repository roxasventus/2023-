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

import { Swiper, SwiperSlide } from "swiper/react"; // basic
import SwiperCore, { Pagination, paginationStyleItem } from "swiper";
import "swiper/css"; //basic
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function EatingPage() {
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
        <SubBanner text="인버카길 맛집"/>
      </div>

      <Top text="맛집 Top3" image1={photo} image2={photo2} image3={photo3} 
        title1="The Auction House"
        title2="The Batch Cafe"
        title3="KOJI Japanese Restaurant"
        article1="20 Don Street, Invercargill 9810" 
        article2="173 Spey Street, Invercargill 9810" 
        article3="76 Tay Street, Invercargill 9810"
        />
    </div>   
);
}