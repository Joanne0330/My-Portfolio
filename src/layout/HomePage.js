import React from "react";
import Home from "../components/Home";

export default function ProjectsPage() {
    return (
        <div>
                <header style={HomePageStyle}><h1>Joanne Chen</h1></header>
                <Home />
        </div>
    )
}
const HomePageStyle = {
    margin: '2rem', 
    backgroundColor: 'darkgray', 
    padding: '2rem'
}