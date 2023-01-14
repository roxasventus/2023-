import React from 'react';

export default function Picture({src}) {

    return(
        <div style={{
            width: "stretch",
            aspectRatio: "1 / 1",
            width: "100%",
            height: "750px",         
            overflow: "hidden"
        }}>
        <img
        alt=""
        src={src}
        style={{
            borderRadius: "12px",
            objectFit: "cover",
            width: "100%",
            height: "100%"
        }}/>
        </div>
    );
}