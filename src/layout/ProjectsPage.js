import React from "react";
import Projects from "../components/Projects";

export default function ProjectsPage() {
    return (
        <div>
                <header style={ProjectPageStyle}><h1>Projects</h1></header>
                <Projects />
        </div>
    )
}

const ProjectPageStyle = {
    margin: '2rem', 
    backgroundColor: 'darkgray', 
    padding: '2rem'
}