import React from "react";
import '../App.css';
// import Card from "react-bootstrap/Card";

import FilterBar from './Filterbar';
import ProjectCards from './ProjectCards';

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
        newDataArr: [],
        data:[
            {
                title: "AIsha - Artificial Intelligence Self Help App",
                src: AIsha,
                description: "A machine learning chatbot which analyses, responds to, and tracks users' daily emotions (joy, sadness, anger and fear) in a form of graph. This was my final project at Makers Academy",
                tech: "React, Flask, Python",
                link: "https://github.com/aravzpatel/AIsha",
                key: 1,
                language: "JavaScript"
            },
            {
                title: "Jem Photo Share",
                src: Jem,
                description: "A hybird of Instagram and Facebook social media",
                tech: "Ruby, Rails, MongoDB",
                link: "https://github.com/Joanne0330/Jem-Photoshare",
                key: 2,
                language: "Ruby"
            },
            {
                title: "Tetris Interactive Game",
                src: Tetris,
                description: "An interactive, traditional tetris game built with pure Vanilla JavaScript",
                tech: "JavaScript",
                link: "https://github.com/Joanne0330/Tetris-interactive-game",
                key: 3,
                language: "JavaScript"
            
            },
            {
                title: "Dreambook",
                src: Dreambook,
                description: "A simple Facebook-like social media app where users can make posts and comments. Group project at Makers Academy",
                tech: "Ruby, Rails, PostgresSQL",
                link: "https://github.com/katieljones/acebook-dreambook-2020",
                key: 4,
                language: "Ruby"
            
            },
            {
                title: "Shopping List",
                src: ShoppingList,
                description: "Front-end app, perfect to use as shopping or todo list",
                tech: "React",
                link: "https://github.com/Joanne0330/shopping-list-react",
                key: 5,
                language: "JavaScript"
            
            },
            {
                title: "Bank Tech Test",
                src: BankTechTest,
                description: "A demonstration of clean code, unit and feature testing, written in Ruby. User can make desposites and withraws, and print receipts and statements ",
                tech: "Ruby",
                link: "https://github.com/Joanne0330/BankTechTest",
                key: 6,
                language: "Ruby"
            },
            {
                title: "Takeaway Challenge",
                src: Takeaway,
                description: "A demonstration of clean code, unit tests, written in JavaScript. User can order meals from a menu and have the total price calculated",
                tech: "JavaScript",
                link: "https://github.com/Joanne0330/Takeaway-JavaScript",
                key: 7,
                language: "JavaScript"
            },
            {
                title: "My Portfolio",
                src: Portfolio,
                description: "This website you're looking at!",
                tech: "React",
                link: "https://github.com/Joanne0330/My-Portfolio",
                key: 8,
                language: "JavaScript"
            },   
            ],
        }

    }

    filter = (language) => {
        console.log('langugae', language)
        console.log(this.state.data)
        this.setState({newDataArr: this.state.data})
        if(language === "All") {
            this.setState({data: this.state.newDataArr})

        } else {
            this.setState({data: this.state.newDataArr})
            const filteredProjects = this.state.data.filter(filteringProject => filteringProject.language === language)
            console.log("hahaha", filteredProjects)
            this.setState({
                data: filteredProjects
            })
        }
    }

    
    
    
    render() {
        return (
            <div> 
                <div style={{display: 'center'}} >
                    <FilterBar onChange={this.filter} />
                </div>
                    <ProjectCards data={this.state.data}/>  
            </div>
        )
    }
}

export default Projects;