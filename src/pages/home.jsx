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
              width: "50%",
              height: "410px",

              background: "#000000",
              borderRadius: "10px",

              marginTop: "66px",
              marginLeft: "25%",
            }} loop autoPlay muted
            />
          </div>
   
          <TriangleArticle 
          title="INVERCARGIL" 
          text="뉴질랜드 최남단 도시 인버카길로 당신을 초대합니다.

          인버카길은 뉴질랜드 남섬에서도 전 세계의 최남단 도시 중 하나입니다. 
          사우스랜드의 주요 도시로, 와이호파이 강에 놓여있고, 
          이곳은 블러프에서 북쪽으로 18 km 지점에 오레티 강을 따라 넓게 펼쳐진 사우스랜드 평원의 중심에 위치하고 있습니다.
          인버카길은 여행하기 좋은 넓직한 도로를 가진 마을로, 따뜻하고 친절한 뉴질랜드를 제대로 느낄 수 있는 곳입니다."/>
          

          <Article title="자연의 도시 인버카길" 
          img="../image/image 100.png"
          text="인버카길은 자연이 돋보이는 도시입니다. 인버카길에는 퀸즈파크, 턴벌 톰슨 파크, 오타카로 파크 등 자연과 어우러진 파크가 많이 있습니다. 특히 퀸즈파크는 여러 동물들과 연못 등 도심 속 자연을 느낄 수 있는 곳이다. 또한 따스한 오후에 피크닉을 즐길 수 있는 공간도 마련되어 있습니다."/>



          <Article title="인버카길 역사" 
          img="../image/image101.png"
          text=" 1100년대 마오리족이 현재의 사우스랜드에 정착했습니다. 부족은 바위 등을 자료로 공예품을 제작했고 뉴질랜드 전역에 퍼지게 됩니다. 1890년대부터 낙농업과 농업이 활발해져 유제품, 냉동 육류 가공 공장이 설립되었으며 이로 인해 인구가 약 두 배로 증가했습니다. 현재는 사우스랜드 지방 최대의 도시가 되었습니다."/>


        </>
    );
}