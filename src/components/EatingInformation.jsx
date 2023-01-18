import React from 'react';
import "./EatingInformationCSS.css";

export default function EatingInformation(props) {
  return(
    <>
        <div style={{
            display: "flex",
            width: "944.5px",
            height: "358px",
            left: "488px",
            top: "1960px",

            marginBottom: "51px",

            background: "#C6C7C3"
        }}>
            <img 
            style={{
                width: "422px",
                height: "358px",
            }}
            alt="" src={props.image}/>
            <div style={{display: "block", marginLeft: "22px", marginTop: "32px", width: "481px"}}>
                <div className='Name'>{props.name}</div>
                <div className="Address">{props.address}</div>
                <hr className='E'/>
                <div className="Content">{props.content}</div>
                <div className="Recommend">{props.recommend}</div>
                <div className="Link"><a href={props.link}>웹사이트 방문하기</a></div>
            </div>


        </div>
      </>
  );
}




