import React from 'react';
import SubBanner from '../../components/SubBanner';
import Grade from '../../components/Grade';

export default function Laundry(props) {
  return (
    <>
      <SubBanner text="세탁방"/>
      <Grade title="Liquid Self Service Laundromats" 
      text="49 Yarrow Street, Invercargill 9810"
      url="https://liquidlaundromats.com/location/invercargill-yarrow-st-liquid-laundromat/"
      img="../image/image8.png"
      />
            <Grade title="Glengarry Laundry" 
      text="77 Glengarry Crescent, Glengarry, Invercargill 9810"
      url="https://mappaus.com/d-i.html?utm_content=glengarry-laundry-i104007"
      img="../image/image 9.png"
      />
           
    </>
  );
}