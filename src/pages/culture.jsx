import React from 'react';
import '../App.css';
import { useState } from 'react';
import Banner from '../components/Banner';
import SubBanner from '../components/SubBanner';
import Words from '../components/Words';
import Circleimage from '../components/Circleimage';

import photo from "../image/image.jpg"

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
                lineHeight: "40px",
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
            lineHeight: "80px",
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
              lineHeight: "40px",
              alignItems: "center",
              textAlign: "center",

              color: "#000000"

          }}>기독교</div>
        </div>
        <Circleimage image={photo}/>
      </div>
      <SubBanner text="문화"/>
    </div>   
);
}