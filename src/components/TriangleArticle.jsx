import { React, useState } from 'react';
import "./TriangleArticleCSS.css"

export default function TriangleArticle(props){


    return( 
        <div className="TWrapper">
            <div className="TTitleWrapper">
                <div className="triangle"></div>
                <div  className="TArticleTitle">
                    <div
                        style={{

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
            </div>
            <hr className='T'/>
            <div style = {{
                fontFamily : 
            }}>{props.text}</div>
        </div>

    );
}
