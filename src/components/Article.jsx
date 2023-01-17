import { React, useState } from 'react';
import "./ArticleCSS.css"
import photo from "../image/image.jpg"
export default function Article(props){


    return( 
        <div style={{height:"100%", width: "45%", margin:"10vh auto"}}>
            <div style={{
                display : "flex"
            }}>
            <img style={{width: "55%", height: "100%", borderRadius : "5%"}} alt="" src={photo}/>
            <div className="Wrapper">
                <div  className="ArticleTitle">
                    <div
                        style={{
                            marginTop: "3%",
                            marginLeft: "10%",
                        

                            fontFamily: 'Gmarket Sans TTF',
                            fontStyle: "normal",
                            fontWeight: "700",
                            fontSize: "1.5rem",
                            lineHeight: "28px",
                            /* identical to box height */


                            color: "#000000"
                            
                        }}
                    >{props.title}</div>
                </div>
                <hr className='A'/>
                <div style={{
                    
                    marginLeft : "10%",
                    width: "100%",
                    height: "100%",
                    fontFamily: 'regular',
                    fontStyle: "normal",
                    fontWeight: 500,
                    fontSize: "1rem",
                    lineHeight: "25px",
                    /* or 156% */
                    
            
                }}>{props.text}</div>
                </div>
            </div>
        </div>

    );
}
