import React from "react";
import '../App.css';
import Card from "react-bootstrap/Card";
import AIsha from "../images/AIsha.png";
import Jem from "../images/Jem.png";
import Tetris from "../images/Tetris.png";
import Dreambook from "../images/Dreambook.png";
import ShoppingList from "../images/ShoppingList.png";
import BankTechTest from "../images/BankTechTest.png";
import Takeaway from "../images/Takeaway.png";
import Portfolio from "../images/Portfolio.png"

class Projects extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
        data:[
            {
                title: "AIsha - Artificial Intelligence Self Help App",
                src: AIsha,
                description: "A machine learning chatbot which analyses, responds to, and tracks users' daily emotions (joy, sadness, anger and fear) in a form of graph. This was my final project at Makers Academy",
                tech: "React, Flask, Python",
                link: "https://github.com/aravzpatel/AIsha",
                key: 1
            },
            {
                title: "Jem Photo Share",
                src: Jem,
                description: "A hybird of Instagram and Facebook social media",
                tech: "Ruby, Rails, MongoDB",
                link: "https://github.com/Joanne0330/Jem-Photoshare",
                key: 2
            },
            {
                title: "Tetris Interactive Game",
                src: Tetris,
                description: "An interactive, traditional tetris game built with pure Vanilla JavaScript",
                tech: "JavaScript",
                link: "https://github.com/Joanne0330/Tetris-interactive-game",
                key: 3
            },
            {
                title: "Dreambook",
                src: Dreambook,
                description: "A simple Facebook-like social media app where users can make posts and comments. Group project at Makers Academy",
                tech: "Ruby, Rails, PostgresSQL",
                link: "https://github.com/katieljones/acebook-dreambook-2020",
                key: 4
            },
            {
                title: "Shopping List",
                src: ShoppingList,
                description: "Front-end app, perfect to use as shopping or todo list",
                tech: "React",
                link: "https://github.com/Joanne0330/shopping-list-react",
                key: 5
            },
            {
                title: "Bank Tech Test",
                src: BankTechTest,
                description: "A demonstration of clean code, unit and feature testing, written in Ruby. User can make desposites and withraws, and print receipts and statements ",
                tech: "Ruby",
                link: "https://github.com/Joanne0330/BankTechTest",
                key: 6
            },
            {
                title: "Takeaway Challenge",
                src: Takeaway,
                description: "A demonstration of clean code, unit tests, written in JavaScript. User can order meals from a menu and have the total price calculated",
                tech: "JavaScript",
                link: "https://github.com/Joanne0330/Takeaway-JavaScript",
                key: 7
            },
            {
                title: "My Portfolio",
                src: Portfolio,
                description: "This website you're looking at!",
                tech: "React",
                link: "https://github.com/Joanne0330/My-Portfolio",
                key: 8
            },   
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
                    <Card.Img src={project.src} />
                    <Card.Body>
                        <Card.Title>{project.title}</Card.Title>
                        <Card.Text>{project.description}</Card.Text>
                    </Card.Body>
                    <Card.Footer className="text-muted" style={{margin: '0.2rem'}}>
                        {project.tech}
                    </Card.Footer>    
                    <Card.Footer style={{margin: '0.2rem'}}>
                        <Card.Link href={project.link} target="_blank">See the code</Card.Link>
                    </Card.Footer>
                </Card>

                )    
              })}
            </div>
        )
    }
}

export default Projects;

const cardStyle = {
    minWidth: '22rem',
    maxWidth: '22rem',
    minHeight: '38rem',
    maxHeight: '38rem',
    padding: '2rem',
    margin: '2rem',
    boxShadow: '25px 25px 20px #778899'
}

const pageStyle = {
    display: 'flex', 
    flexDirection: 'row', 
    flexWrap: 'wrap',
    justifyContent: 'space-evenly'
}