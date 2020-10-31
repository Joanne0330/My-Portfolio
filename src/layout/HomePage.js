import React from "react";
import Home from "../components/Home";
import Weather from "../components/Weather";

export default function ProjectsPage() {
    return (
        <div>
                <header style={HomePageStyle}>
                    <h1>Joanne Chen</h1>
                    <p><Weather /></p>
                </header>
                <Home />
        </div>
    )
}
const HomePageStyle = {
    margin: '2rem', 
    backgroundColor: 'darkgray', 
    padding: '2rem'
}