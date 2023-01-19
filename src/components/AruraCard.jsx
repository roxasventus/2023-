import React from 'react';
import "./AruraCardCss.css"

export default function AruraCard(props) {
  return(
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginBottom: '8px',
      marginTop : '3px'
    }}>
    <div style= {{
        fontFamily : 'Gmarket Sans TTF',
        fontSize : '1.8rem',
        fontWeight : 'bold',
        margin :'0 auto',
    }}>
      <div>{props.text}</div>
    </div>
    <div style = {{
       display: 'flex',
       justifyContent: 'center',

    }}>
    <img src = {props.img} alt="안됨" style = {{
        // width : '40vmin',
        // height : '100%',
    }}></img>
    <div className = 'speech-bubble'>{props.subText}</div> 
    </div>  
    </div>
  );
}