import React from 'react';
import '../App.css';
import { useState } from 'react';
import SubBanner from '../components/SubBanner';
import Top from '../components/Top';

import EatingInformation from '../components/EatingInformation';

import Picture from '../components/Picture';
import photo from "../image/image.jpg"
import photo2 from "../image/image2.jpg"
import photo3 from "../image/image3.jpg"
import photo4 from "../image/image4.jpg"
import photo23 from "../image/image 23.png"
import photo231 from "../image/image 23-1.png"
import photo232 from "../image/image 23-2.png"
import photo233 from "../image/image 23-3.png"
import photo234 from "../image/image 23-4.png"
import photo235 from "../image/image 23-5.png"
import photo236 from "../image/image 23-6.png"
import photo237 from "../image/image 23-7.png"
import photo238 from "../image/image 23-8.png"
import photo239 from "../image/image 23-9.png"
import photoIlt1 from "../image/ilteatimg1.png"
import photoIlt2 from "../image/ilteatimg2.png"
import photoIlt3 from "../image/ilteatimg3.png"



import { Swiper, SwiperSlide } from "swiper/react"; // basic
import SwiperCore, { Pagination, paginationStyleItem } from "swiper";
import "swiper/css"; //basic
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function EatingPage() {
  return (
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
        pagination={{ clickable: true }} //*
        paginationStyleItem={{ width: 10, height: 10, borderRadius: 10 }}
      >
        <SwiperSlide> <Picture src={photo} /> </SwiperSlide>
        <SwiperSlide> <Picture src={photo2} /> </SwiperSlide>
        <SwiperSlide> <Picture src={photo3} /> </SwiperSlide>
        <SwiperSlide> <Picture src={photo4} /> </SwiperSlide>
      </Swiper>
      <div style={{ marginTop: "50px" }}>
        <SubBanner text="인버카길 맛집" />
      </div>

      <Top text="맛집 Top3" image1={photo23} image2={photo231} image3={photo232}
        title1="The Auction House"
        title2="The Batch Cafe"
        title3="KOJI Japanese Restaurant"
        article1="20 Don Street, Invercargill 9810"
        article2="173 Spey Street, Invercargill 9810"
        article3="76 Tay Street, Invercargill 9810"
      />

      <div style={{
        margin: "auto",
        width: "70%",
        height: "224px",
        left: "440px",
        top: "1823px",

        paddingLeft: "42px",
        paddingTop: "50px",

        background: "#91C427"
      }}>
        <div style={{
          width: "auto",
          height: "44px",
          left: "482px",
          top: "1873px",

          fontFamily: 'Gothic A1',
          fontStyle: "normal",
          fontWeight: "700",
          fontSize: "35px",
          lineHeight: "44px",
          /* identical to box height */

          marginBottom: "43px",


          color: "#000000"
        }}>브런치가 생각날 때</div>

        <EatingInformation image={photo231} name="The Batch House" address="173 Spey Street, Invercargill 9810"
          content="점심시간만 되면 현지인들로 붐비는 카페! 늦게가면 자리가 없어요~ "
          recommend="추천 메뉴 : 에그 베네딕트, 차우더"
          link="https://www.facebook.com/batchcafe/"
        />
        <EatingInformation image={photo23} name="The Auction House" address="20 Don Street, Invercargill 9810"
          content="야외에서 햇살을 맞으며 맛있는 브런치 ~"
          recommend="추천 메뉴 : Big breakfast, Chia bowl"
          link="https://www.theauctionhouse.co.nz/contact" />
      </div>

      <div style={{
        margin: "1000px auto",
         width: "70%",
        height: "224px",
        left: "440px",
        top: "1823px",

        paddingLeft: "42px",
        paddingTop: "50px",

        background: "#91C427"
      }}>
        <div style={{
         width: "auto",
         height: "44px",
          left: "482px",
          top: "1873px",

          fontFamily: 'Gothic A1',
          fontStyle: "normal",
          fontWeight: "700",
          fontSize: "35px",
          lineHeight: "44px",
          /* identical to box height */

          marginBottom: "43px",


          color: "#000000"
        }}>쌀밥이 생각날 때</div>

        <EatingInformation image={photo232} name="KOJI JAPANESE RESTAURANT" address="76 Tay Street, Invercargill 9810"
          content="한국인 사장님이 운영하시는 일식집!!
        한국인은 10% 할인이라구~"
          recommend="추천 메뉴 : Sushi & Tempura set"
          link="https://www.kojiinvercargill.co.nz/"
        />
        <EatingInformation image={photo233} name="Thai Thai Restaurant" address="96 Spey Street, Invercargill 9810"
          content="뉴질랜드에서 느끼는 타이의 맛!"
          recommend="추천 메뉴 : Pineapple fried rice "
          link="https://www.thaithaiinvercargill.co.nz/" />
        <EatingInformation image={photo234} name="Vietnamese Delight" address="7B Martin Street, Strathern, Invercargill 9812"
          content="언제든지 맛있는 한 끼 뚝딱!"
          recommend="추천 메뉴 : Fired rice"
          link="https://www.facebook.com/VietnameseDelightNZ?paipv=0&eav=AfbSM_VeS5QM_a438c9kh5Gpi3OWWdQg58RKwkqvdfIsYYblo7gr1auJRe6ltExr08k&_rdr" />
      </div>


      <div style={{
        margin: "1500px auto",
        width: "70%",
        height: "224px",
        left: "440px",
        top: "1823px",

        paddingLeft: "42px",
        paddingTop: "50px",

        background: "#91C427"
      }}>
        <div style={{
          width: "auto",
          height: "44px",
          left: "482px",
          top: "1873px",

          fontFamily: 'Gothic A1',
          fontStyle: "normal",
          fontWeight: "700",
          fontSize: "35px",
          lineHeight: "44px",
          /* identical to box height */

          marginBottom: "43px",


          color: "#000000"
        }}>현지 맛집</div>
        <EatingInformation image={photoIlt1} name="Brew’d cafe" address="59 Dee Street, CBD, Invercargill, 9810"
          content="Brew'd는 계절에 따라 정기적으로 업데이트되는 정식 아침 및 점심 메뉴와 가벼운 식사, 달콤한 간식 및 바쁜 사람들을 위한 다양한 옵션을 위한 잘 채워진 캐비닛을 제공합니다. "
          recommend="추천 메뉴 : EGGS BENEDICT, BALSAMIC GLAZED MUSHROOM"
          link="https://thelanglands.co.nz/brewd/" />
        <EatingInformation image={photoIlt2} name="MELD" address="The Langlands Hotel Ground floor, access off Don Street"
          content="프리미엄 및 현지 농산물을 선보이는 요리로 퓨전 풍미의 요리 정신을 기립니다. "
          recommend="추천 메뉴 : MUSHROOM DUMPLINGS, CUCUMBER KIMCHI"
          link="https://www.facebook.com/meldsignaturerestaurant" />
        <EatingInformation image={photoIlt3} name="The Homestead" address="59 Dee Street, CBD, Invercargill, 9810"
          content="다양하고 새로운 메뉴를 통해 훈제 장 고기와 어린이 메뉴를 포함하여 Southland에서 가장 맛있는 음식을 선보입니다. "
          recommend="추천 메뉴 : EGGS BENEDICT, BALSAMIC GLAZED MUSHROOM"
          link="https://thelanglands.co.nz/brewd/" />

        <EatingInformation image={photo235} name="Pinch of Spice" address="7 Clyde Street, City Centre, Invercargill 9810"
          content="인도 현지 보다 맛있는 뉴질랜드 커리!"
          recommend="추천 메뉴 : Butter chicken"
          link="https://pinchofspicetakeaway.co.nz/order-now"
        />
        <EatingInformation image={photo236} name="Northern Tavern" address="Sydney Street, Windsor, Invercargill 9810"
          content="언제나 후회없는 선택! 칵테일 한잔은 필수~~"
          recommend="추천 메뉴 : Fisherman’s basket"
          link="http://www.northerntavern.co.nz/" />
        <EatingInformation image={photo237} name="Pita Pit" address="47 Tay Street, Invercargill 9810"
          content="뉴질랜드 서브웨이 가볍게 건강한 한 끼!"
          recommend="추천 메뉴 : Chicken Caesar"
          link="https://www.pitapit.co.nz/menu?gclid=Cj0KCQiAq5meBhCyARIsAJrtdr6C9HbE9CbeY6789EtT4b4vCK4BVIzL8PzOPlUih5fH_x9TzpSLMiQaAmUqEALw_wcB" />
        <EatingInformation image={photo238} name="BurgerFuel Invercargill" address="123 Dee Street, Invercargill 9810"
          content="고구마 튀김 맛집!! 햄버거는 덤이라구~"
          recommend="추천 메뉴 : KUMARA FRIES"
          link="https://burgerfuel.com/nz/locations/INVERCARGILL" />
        <EatingInformation image={photo239} name="The Saucy Chef Restaurant" address="Sydney Street &, Saint Andrew Street, Invercargill 9810"
          content="연인과 함께 분위기 있는 한 끼!"
          recommend="추천 메뉴 : Oven baked loaf"
          link="https://www.thesaucychef.co.nz/" />

      </div>

    </div>
  );
}