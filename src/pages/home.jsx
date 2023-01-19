import React from 'react';
import TriangleArticle from '../components/TriangleArticle';
import { Swiper, SwiperSlide } from "swiper/react"; // basic
import Article from '../components/Article';
import Picture from '../components/Picture';

import video from '../image/video.mp4'

import photo from "../image/image.jpg"
import photo2 from "../image/image2.jpg"
import photo3 from "../image/image3.jpg"
import photo4 from "../image/image4.jpg"
export default function HomePage() {
    return(
        <>
          <Swiper
            style={{
              width: "100%",
              height: "80vmin",
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
          
          <div style={{width:"100%"}}>
            <video src={video}
            style={{
              width: "858px",
              height: "410px",
              left: "532px",
              top: "838px",

              background: "#000000",
              borderRadius: "10px",

              marginTop: "66px",
              marginLeft: "27%",
            }}
            autoplay
            controls
            />
          </div>
   
          <TriangleArticle 
          title="INVERCARGIL" 
          text="사우스랜드의 주요 도시로, 와이호파이 강에 놓여있고, 더니딘으로부터 남서부로 224 킬로미터 떨어져있다. 남섬의 화물 열차 철도의 종점이 된다. 도시의 거리들은 두드러지게 순서로 세워졌고, 십자 원형에 지어졌다. 뉴질랜드에서 가장 좋은 육류와 양모를 생산한다. 1년마다 700만 마리의 도축과 겸하여 냉동업이 발달하였다. 사료 작물, 곡물, 씨앗 생산을 위한 잔디가 자라는 광대한 지역이 펼쳐져있고, 고르게 내리는 비에 의하여 연중계속되게 자라는 편이다. 변두리 지역에서는 제재업과 석탄 채굴이 주요 산업이다. 인버카길의 항구가 되는 블러프(Bluff)는 도시로부터 남부로 27 킬로미터 떨어져있다. 육류와 양모를 떠나서, 이 지방의 주요 수출품은 곡물과 비철금속이다."/>
          

          <Article title="행복한 나라 인버카길" 
          img="../image/image 00.png"
          text="사우스랜드의 주요 도시로, 와이호파이 강에 놓여있고, 더니딘으로부터 남서부로 224 킬로미터 떨어져있다. 남섬의 화물 열차 철도의 종점이 된다. 도시의 거리들은 두드러지게 순서로 세워졌고, 십자 원형에 지어졌다."/>



          <Article title="행복한 나라 인버카길" 
          img="../image/image 18.png"
          text="사우스랜드의 주요 도시로, 와이호파이 강에 놓여있고, 더니딘으로부터 남서부로 224 킬로미터 떨어져있다. 남섬의 화물 열차 철도의 종점이 된다. 도시의 거리들은 두드러지게 순서로 세워졌고, 십자 원형에 지어졌다."/>


        </>
    );
}