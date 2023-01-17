import { React, useState } from 'react';

export default function Toparticle(props){


    return(
        <div>
            <div style={{
                display: "block",
            }}>
                <img 
                style={{
                width: "266px",
                height: "239px",
                left: "650px",
                top: "1171px"
                }}
                alt="" src={props.image}/>
                <div
                style={{
                    width: "266px",
                    height: "239px",
                    left: "650px",
                    top: "1171px"
                    }}
                
                >{props.article}</div>
            </div>
        </div>
    );
}
