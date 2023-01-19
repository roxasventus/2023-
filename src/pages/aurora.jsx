import React from 'react';
import '../App.css';
import { useState } from 'react';
import AruraCard from './../components/AruraCard';
import Introduce from './../components/Introduce';
import bird1 from '../image/bird1.svg'
import bird2 from '../image/bird2.svg'
import bird3 from '../image/bird3.svg'
import bird4 from '../image/bird4.png'
import bird5 from '../image/bird5.png'
import bird6 from '../image/bird6.png'


export default function AuroraPage() {
  return(
    <div className="App" style = {{
      marginTop : '30px',
    }}>
      <video src="/video/aurora.mp4" loop autoPlay muted />
      <AruraCard img = {bird1} text = "Q. 오로라가 뭔가요?" subText = "오로라는 지구 밖에서 들어온 대전 입자가 지구 대기권 상층부의 기체와 마찰하여 빛을 내는 현상입니다. 쉽게 말하자면 태양과 지구 사이의 상호작용으로 인한 현상이라고 볼 수 있습니다."></AruraCard>
      <AruraCard img = {bird2} text = "Q. 오로라를 보려면 어디로 가야해요?" subText = "오로라는 보통 극지방에서 잘 볼 수 있습니다. 극지방인 북반구와 남반구에 가까울수록 관측이 쉽기 때문에 오로라를 극광이라고도 합니다."></AruraCard>
      <AruraCard img = {bird3} text = "Q. 뉴질랜드에서도 오로라를 볼 수 있나요?" subText = "네, 그렇습니다"></AruraCard>
      <AruraCard img = {bird4} text = "Q. 뉴질랜드에서도 오로라를 보려면 어디로 가야 하나요?" subText = "남섬의 남단, 더니든, 인버카길을 추천합니다 뉴질랜드의 오로라 강도를 Kp라는 수치로 나타낼 수 있는데 수치가 5 이상이면 눈으로 오로라를 관측할 수 있습니다. 인버카길에서 오로라 축제를 곧 개최하니 인버카길 여행을 추천드립니다!"></AruraCard>
      <AruraCard img = {bird5} text = "Q. 오로라는 언제 볼 수 있나요?" subText = "  오로라는 연중 항상 일어나는 현상이지만 눈으로 볼 수 있을 정도로 강렬해지는 건 보통 ‘겨울’시즌 입니다. 뉴질랜드의 겨울은 3월~9월 즈음입니다."></AruraCard>
      <AruraCard img = {bird6} text = "Q. 오로라를 볼 수 있는 조건은 무엇인가요?" subText = "1. 태양의 활동이 강한 날 2. 매우 맑은 하늘의 밤 3. 인공적인 조명이 없는 도심이 아닌 곳 4. 달이 밝지 않은 날 5. 구름이 없는 날"></AruraCard>
    </div>   
  );
}