import { React, useState } from 'react';
import "./ArticleCSS.css"
import photo from "../image/image.jpg"
export default function Article(props){


    return( 
        <div style={{height:"100%", width: "30%", display:"flex", margin:"118px auto"}}>
            <img style={{width: "80%", height: "299px"}} alt="" src={photo}/>
            <div className="Wrapper">
                <div  className="ArticleTitle">
                    <div
                        style={{
                            marginTop: "30px",
                            marginLeft: "53px",
                            marginBottom: "11px",
                            top: "1761px",

                            fontFamily: 'Gmarket Sans TTF',
                            fontStyle: "normal",
                            fontWeight: "700",
                            fontSize: "24px",
                            lineHeight: "28px",
                            /* identical to box height */


                            color: "#000000"
                            
                        }}
                    >{props.title}</div>
                </div>
                <hr className='A'/>
                <div style={{
                    
                    margin:"28px 53px",

                    width: "80%",
                    height: "100%",
                    left: "991px",
                    top: "1833px",
                    
                    fontFamily: 'Gothic A1',
                    fontStyle: "normal",
                    fontWeight: 500,
                    fontSize: "16px",
                    lineHeight: "25px",
                    /* or 156% */
                    
            
                }}>{props.text}</div>
            </div>
        </div>

    );
}
