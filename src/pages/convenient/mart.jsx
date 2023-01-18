import React from 'react';
import SubBanner from '../../components/SubBanner';
import Grade from '../../components/Grade';

export default function Mart(props) {
  return (
    <>
        <SubBanner text="마트"/>
        <Grade title=" Countdown Invercargill" 
      text="172 Tay Street, Invercargill 9810
      032113100"
      url="https://www.countdown.co.nz/store-finder/9191/invercargill/invercargill-countdown?utm_source=google&utm_medium=organic&campaign=gmb&utm_term=countdown-invercargill"
      img="../image/image 30.png"
      />
            <Grade title="PAK'nSAVE Invercargill" 
      text=" 95 Tay Street, Invercargill 9810
      032144864"
      url="PAK'nSAVE Invercargill"
      img="../image/image 31.png"
      />
            <Grade title="New World Windsor" 
      text=" 51 Windsor Street, Windsor, 
      Invercargill 9810
      032177175"
      url="https://www.newworld.co.nz/"
      img="../image/image 32.png"
      />
      <Grade title="SuperValue Plaza Invercargill" 
      text=" 103 Yarrow Street, Invercargill 9810
      032182205"
      url="https://plaza.store.supervalue.co.nz/"
      img="../image/image 33.png"
      />
    </>
  );
}