// import { render } from "@testing-library/react";
import React from "react";
import Card from "react-bootstrap/Card";

class Projects extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
        data:[
            {
                title: "AIsha - Artificial Intelligence Self Help App",
                description: "A machine learning chatbot which analyses, responds to, and records users' daily emotions (joy, sadness, anger and fear). My final project at Makers Academy",
                tech: "React, Flask, Python",
                link: "https://github.com/aravzpatel/AIsha",
                key: 1
            },
            {
                title: "Jem Photo Share",
                description: "A hybird of Instagram and Facebook social media",
                tech: "Ruby, Rails, MongoDB",
                link: "https://github.com/Joanne0330/Jem-Photoshare",
                key: 2
            },
            {
                title: "Tetris Interactive Game",
                description: "An interactive, traditional tetris game made by pure Vanilla JavaScript",
                tech: "JavaScript",
                link: "https://github.com/Joanne0330/Tetris-interactive-game",
                key: 3
            },
            {
                title: "Dreambook",
                description: "A mock Facebook social media. Group project at Makers Academy",
                tech: "Ruby, Rails, PostgresSQL",
                link: "https://github.com/katieljones/acebook-dreambook-2020",
                key: 4
            },
            {
                title: "Shopping List",
                description: "Front-end app, perfect to use as shopping or todo list",
                tech: "React",
                link: "https://github.com/Joanne0330/shopping-list-react",
                key: 5
            },
            {
                title: "My Portfolio",
                description: "This website you're looking at!",
                tech: "React",
                link: "https://github.com/Joanne0330/My-Portfolio",
                key: 6
            },
            {
                title: "Bank Tech Test",
                description: "A demonstration of clean code, unit and feature testing, written in Ruby. User can make desposti and withraw of a bank account, and print receipts and statements ",
                tech: "Ruby",
                link: "https://github.com/Joanne0330/BankTechTest",
                key: 7
            },
            {
                title: "Takeaway Challenge",
                description: "A demonstration of clean code, unit tests, written in JavaScript. User can order meals from a menu and have price calculated",
                tech: "JavaScript",
                link: "https://github.com/Joanne0330/Takeaway-JavaScript",
                key: 8
            }
            


     ]
    }
}

    render() {
        return (
            <div style={pageStyle}>            
              {this.state.data.map((project) => {
                  console.log(project)
                return (

                <Card key={project.key} style={cardStyle}>
                    <Card.Body>
                        <Card.Title>{project.title}</Card.Title>
                        <Card.Text>{project.description}</Card.Text>
                        <Card.Link href={project.link}>See the code</Card.Link>
                    </Card.Body>
                    <Card.Footer className="text-muted">{project.tech}</Card.Footer>    
                </Card>

                )    
              })}
            </div>
        )
    }
}

export default Projects;

const cardStyle = {
    minWidth: '20rem',
    maxWidth: '20rem',
    minHeight: '35rem',
    maxHeight: '35rem',
    padding: '2rem',
    margin: '2rem',
    boxShadow: '5px 10px 8px #a1a0a0',
}

const pageStyle = {
    display: 'flex', 
    flexDirection: 'row', 
    flexWrap: 'wrap'
}