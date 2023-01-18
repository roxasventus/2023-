import React from 'react';
import SubBanner from '../../components/SubBanner';
import Grade from '../../components/Grade';

export default function Koreanmart(props) {
  return (
    <>
      <SubBanner text="한인마트"/>
      <Grade title="Asian House 
      Groceries" 
      text="61A Tay Street, Invercargill 98100211664308"
      url="https://www.kelvinhotel.co.nz/"
      img="../image/image 10.png"
      
      />
            <Grade title="Million Coin Asian" 
      text=" Grocery Shop, 82 Tay Street, Invercargill 9810032183288"
      url="https://www.kelvinhotel.co.nz/"
      img="../image/image 45.png"
      />

<Grade title="Filipino 
      & Asian Store" 
      text="302 Yarrow Street, Richmond, Invercargill 9810032172237"
      url="https://www.kelvinhotel.co.nz/"
      img="../image/image 14.png"
      />
    </>
  );
}