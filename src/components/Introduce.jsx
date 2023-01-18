import { React, useState } from 'react';
import "./IntroduceCSS.css"
//import photo from "../image/image.jpg"
export default function Introduce(props){


    return( 
        <div style={{height:"100%", width: "70%", display:"flex", margin:"118px auto"}}>
            <img style={{width: "50%", height: "100%"}} alt="" src={props.img}/>
            <div className="IWrapper">
                <div  style={{ marginLeft: "19px", marginTop: "20px"}} className="ArticleTitle">
                    <div className='Rectangle'/>
                    <div
                        style={{
                            
                            marginTop: "8px",
                            left: "57.42%",
                            right: "1.35%",
                            top: "5.01%",
                            bottom: "74.44%",

                            fontFamily: 'Gmarket Sans TTF',
                            fontStyle: "normal",
                            fontWeight: "700",
                            fontSize: "1.875rem",
                            lineHeight: "34px",
                            alignItems: "center",
                            textAlign: "center",

                            color: "#000000"
                            
                        }}
                    >{props.title}</div>
                </div>
                <div style={{
                    
                    marginLeft:"20px",
                    marginTop: "18px",

                    width: "100%",
                    height: "100%",
                    left: "991px",
                    top: "1833px",
                    
                    fontFamily: 'Gothic A1',
                    fontStyle: "normal",
                    fontWeight: 500,
                    fontSize: "1rem",
                    lineHeight: "25px",
                    /* or 156% */
                    
                    
                    color: "#000000"
            
                }}>{props.text}</div>
            </div>
        </div>

    );
}
