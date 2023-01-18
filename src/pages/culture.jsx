import React from 'react';
import '../App.css';
import { useState } from 'react';
import Banner from '../components/Banner';
import SubBanner from '../components/SubBanner';
import CultureList from '../components/CultureList';
import Words from '../components/Words';
import Circleimage from '../components/Circleimage';
import photo from "../image/Group 2.png"
import photo2 from "../image/Group 3.png"

import { Swiper, SwiperSlide } from "swiper/react";


export default function CulturePage() {
  return(
    <div className="App">
      <Banner text="문화"/>
      <div style={{marginTop: "200px"}}>
        <SubBanner text="뉴질랜드의 공용어"/>
        <div style={{
            marginTop: "83px",
            marginBottom: "57.47px",

            left: "45.99%",
            right: "45.73%",
            top: "13.55%",
            bottom: "85.68%",

            fontFamily: 'Gothic A1',
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: "24px",
            lineHeight: "30px",
            alignItems: "center",
            textAlign: "center",

            color: "#000000"
        }}>영어</div>
        <Words word1="Hello" word2="How are you?" word3="Good Morning"/>
        <div style={{
            marginTop: "83px",
            marginBottom: "57.47px",

            left: "45.99%",
            right: "45.73%",
            top: "13.55%",
            bottom: "85.68%",

            fontFamily: 'Gothic A1',
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: "24px",
            lineHeight: "30px",
            alignItems: "center",
            textAlign: "center",

            color: "#000000"
        }}>마오리어</div>
        <Words word1="Kia ora" word2="Kei te pēhea koe?" word3="Mōrena"/>
        <div style={{
            marginTop: "83px",
            marginBottom: "57.47px",

            left: "45.99%",
            right: "45.73%",
            top: "13.55%",
            bottom: "85.68%",

            fontFamily: 'Gothic A1',
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: "24px",
            lineHeight: "30px",
            alignItems: "center",
            textAlign: "center",

            color: "#000000"
        }}>수화</div>
      </div>
      <SubBanner text="인종 및 종교"/>


      <div style={{width:"1000px", height:"700px", display: "flex", margin:"auto", marginTop:"119.13px"}}>
        <Circleimage image={photo}/>
        <div style={{display: "block"}}>
          <div style={{
            width: "311px",
            height: "71px",
            left: "917px",
            top: "1380px",
            
            fontFamily: 'Gothic A1',
            fontStyle: "normal",
            fontWeight: 800,
            fontSize: "64px",
            lineHeight: "80px",
            alignItems: "center",
            textAlign: "center",
            
            color: "#719C17"


          }}>85%</div>
          <div style={{
                width: "311px",
                height: "71px",
                left: "948px",
                top: "1460px",

                fontFamily: 'Gothic A1',
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "32px",
                lineHeight: "120px",
                alignItems: "center",
                textAlign: "center",

                color: "#000000",



          }}>유럽 / 파케하인</div>
        </div>
      </div>

      <div style={{width:"1000px", height:"700px", display: "flex", margin:"auto", marginTop:"119.13px", marginBottom: "223px"}}>
        <div style={{display: "block"}}>
          <div style={{
            width: "311px",
            height: "71px",
            left: "917px",
            top: "1380px",
            
            fontFamily: 'Gothic A1',
            fontStyle: "normal",
            fontWeight: 800,
            fontSize: "64px",
            lineHeight: "400px",
            alignItems: "center",
            textAlign: "center",
            
            color: "#719C17"


          }}>37.5%</div>
          <div style={{
              width: "311px",
              height: "71px",
              left: "623px",
              top: "2311px",

              fontFamily: 'Gothic A1',
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "32px",
              lineHeight: "400px",
              alignItems: "center",
              textAlign: "center",

              color: "#000000"

          }}>기독교</div>
        </div>
        <Circleimage image={photo2}/>
      </div>
      <SubBanner text="문화"/>

      <Swiper
            style={{
              width: "100%",
              height: "800px",
              backgroundColor: "#FFFFFF",
              borderRadius: "12px",
              margin: "auto"
            }}
            spaceBetween={130}
            slidesPerView={3}
            pagination={{ clickable: true}} //*
            paginationStyleItem={{ width:10, height:10, borderRadius:10 }}
          >
            <SwiperSlide> 
              <CultureList 
              img_b = "../image/image 44.png"
              title = "상점"
              text = "음식점이나 상점같은 상가는 보통 영업시간이 오후 9시를 넘는 곳을 찾기 어렵다. 인구도 많이 없을 뿐더러 오늘일을 내일로 미루면 좋지! 하는 문화가 있어 오래도록 영업하는 곳을 찾기 어렵다."/>
            </SwiperSlide>
            <SwiperSlide> 
              <CultureList 
              img_b = "../image/image 44.png"
              title = "식수"
              text = "수돗물은 식수로 사용되고있으며, 미네랄 워터의 경우 주류보다 가격이 높다."/>
            </SwiperSlide>
            <SwiperSlide> 
              <CultureList 
              img_b = "../image/image 44.png"
              title = "술"
              text = "슈퍼마켓에서는 술을 팔지 않는다. 주류를 구매하기 위해선 리큐르 스토어(liquor store)에서 구매하거나 bar나 호텔 bar에서 대량으로 구매할 수 있다"/>
            </SwiperSlide>
            <SwiperSlide> 
              <CultureList 
              img_b = "../image/image 44.png"
              title = "흡연"
              text = "담배에 대한 규제가 매우 강력한 나라 중 하나로 담배 가격 또한 매우 높은 나라이다. 2020년 기준 담배 한갑이 무려 30 뉴질랜드 달러, 대한민국 원으로는 24,000원에 달하며 2021년 들어서는 아예 2008년 이후 출생한 이들은 담배 구매 자체를 금지하는 법안이 제기되었다."/>
            </SwiperSlide>
            <SwiperSlide> 
              <CultureList 
              img_b = "../image/image 44.png"
              title = "응급상황"
              text = "구급차는 잘 출동하지 않는다. 왠만한 상처나 부상으로는 구급차를 부르기 어렵다. 몸을 가눌 수 없거나 숨 쉬기 어려운 정도 등 심각한 상황이어야 구급차가 출동한다. 현재 모든 부분에서 일을 할 수 있는 인력이 매우 부족한 상황이기 때문에 빈 곳을 메꾸기 어려워 이러한 상황이 지속되고있다."/>
            </SwiperSlide>
            <SwiperSlide> 
              <CultureList 
              img_b = "../image/image 44.png"
              title = "오존"
              text = "선글라스를 챙기도록 하자. 뉴질랜드 부근의 오존층이 심하게 파손되어 태양이 매우 강하다. 선글라스를 안 끼면 눈이 심하게 손상이 된다. 또한 자외선으로 인해 피부암의 위험이 높다."/>
            </SwiperSlide>
          </Swiper>


    </div>   
);
}