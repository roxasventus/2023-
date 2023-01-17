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
      url="https://www.kelvinhotel.co.nz/"
      img="../image/image 30.png"
      />
            <Grade title="PAK'nSAVE Invercargill" 
      text=" 95 Tay Street, Invercargill 9810
      032144864"
      url="https://www.kelvinhotel.co.nz/"
      img="../image/image 31.png"
      />
            <Grade title="New World Windsor" 
      text=" 51 Windsor Street, Windsor, 
      Invercargill 9810
      032177175"
      url="https://www.kelvinhotel.co.nz/"
      img="../image/image 32.png"
      />
      <Grade title="SuperValue Plaza Invercargill" 
      text=" 103 Yarrow Street, Invercargill 9810
      032182205"
      url="https://www.kelvinhotel.co.nz/"
      img="../image/image 33.png"
      />
    </>
  );
}