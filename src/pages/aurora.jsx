import React from 'react';
import '../App.css';
import { useState } from 'react';
import AruraCard from './../components/AruraCard';
import Introduce from './../components/Introduce';

export default function AuroraPage() {
  return(
    <div className="App" style = {{
      marginTop : '30px',
    }}>
      <AruraCard text = "Q. 오늘은? " subText = "오로라는 지구 밖에서 들어온 대전 입자가 지구 대기권 상층부의 기체와 마찰하여 빛을 내는 현상입니다. 쉽게 말하자면 태양과 지구 사이의 상호작용으로 인한 현상이라고 볼 수 있습니다."></AruraCard>
    </div>   
  );
}