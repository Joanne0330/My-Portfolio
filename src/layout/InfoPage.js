import React from "react";
import Info from "../components/Info";

export default function InfoPage() {
    return (
        <div style={{paddingBottom: '20rem'}}>
                <header style={InfoPageStyle}><h1>More Info</h1></header>
                <Info />

        </div>
    )
}

const InfoPageStyle = {
    margin: '2rem', 
    backgroundColor: 'darkgray', 
    padding: '2rem'
}