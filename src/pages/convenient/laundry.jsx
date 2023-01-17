import React from 'react';
import SubBanner from '../../components/SubBanner';
import Grade from '../../components/Grade';

export default function Laundry(props) {
  return (
    <>
      <SubBanner text="세탁방"/>
      <Grade title="Liquid Self Service Laundromats" 
      text="49 Yarrow Street, Invercargill 9810"
      url="https://www.kelvinhotel.co.nz/"
      img="../image/image8.png"
      />
            <Grade title="Glengarry Laundry" 
      text="77 Glengarry Crescent, Glengarry, Invercargill 9810"
      url="https://www.kelvinhotel.co.nz/"
      img="../image/image 9.png"
      />
           
    </>
  );
}