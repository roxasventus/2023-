import React from 'react';

import { useState } from 'react';

export default function Banner(props) {
  return(
    <div style= {{
      width: "100%",
      
      fontFamily: 'Gmarket Sans TTF',
      fontStyle: "normal",
      fontWeight: "700",
      fontSize: "3.75rem",
      lineHeight: "69px",

      color: "#000000",
    
    }} className="Banner">
      <div>{props.text}</div>
    </div>   
  );
}