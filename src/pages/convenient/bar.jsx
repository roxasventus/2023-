import React from 'react';
import SubBanner from '../../components/SubBanner';
import Grade from '../../components/Grade';

export default function Bar(props) {
  return (
    <>
      <SubBanner text="주류 백화점"/>
      <Grade title="Liquorland South City" 
      text="Cnr Elles Rd &, Tweed Street, 
      West Invercargill, Invercargill 9810
      032189729"
      url="https://www.liquorland.co.nz/stores/south-island/otago/liquorland-south-city"
      img="../image/image 17.png"
      />
            <Grade title="Super Liquor Southland" 
      text=" 406 Elles Road, Kew, Invercargill 9879
      032165329"
      url="https://www.superliquor.co.nz/"
      img="../image/image 18.png"
      />
            <Grade title="East End Liquor" 
      text=" 12 Bamborough Street, Richmond, Invercargill 9810
      032173415"
      url="https://www.eastendliquor.co.nz/"
      img="../image/image 19.png"
      />
      <Grade title="Liquorland Centrepoint" 
      text=" 252 Dee Street, Avenal, Invercargill 9810
      032113650"
      url="https://www.liquorland.co.nz/stores/south-island/otago/liquorland-centrepoint"
      img="../image/image 20.png"
      />
      <Grade title=" Super Liquor Collingwood" 
      text=" 44 North Road, Prestonville, 
      Invercargill 9810
      032158308"
      url="https://superliquorcollingwood.co.nz/"
      img="../image/image 21.png"
      />
    </>
  );
}