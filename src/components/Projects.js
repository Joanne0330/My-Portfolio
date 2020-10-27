import { render } from "@testing-library/react";
import React from "react";

class Projects extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
        data:[
            {
            title: "AIsha - Artificial Intelligence Self Help App",
            description: "A machine learning chatbot which analyses, responds to, and records users' emotions (joy, sadness, anger and fear)",
            tech: "React, Flask, Python",
            link: "https://github.com/aravzpatel/AIsha",
            key: 1
        }
     ]
    }
}

    render() {
        return (
            <div>
              <h2>where's the data?</h2>  
              {this.state.data.map((project, index) => {
                return <p>{project.title}</p>
              })}
            </div>
        )
    }
}

export default Projects;