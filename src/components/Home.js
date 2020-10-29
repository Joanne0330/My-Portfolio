import React from "react";
import '../App.css';
import Carousel from "react-bootstrap/Carousel";
import Joanne from "../images/Joanne.png";

export default function Home() {
    return (
        <div style={{backgroundColor: 'gainsboro'}}>
            <Carousel>
                <Carousel.Item style={slideStyle}>
                    <img
                        className="d-block w-100"
                        src={Joanne}
                        alt="First slide"
                        style={{maxWidth: '50%', padding: '2rem', display: 'center'}}
                    />
                    <Carousel.Caption>
                        <h3 style={{color: '#343a40', paddingTop: '3rem'}}>Full-Stack Software Developer</h3>
                        <p style={{color: '#343a40'}}>Trained by Makers Academy School for Software Engineering, London</p>
                    </Carousel.Caption>
                </Carousel.Item>

                 <Carousel.Item style={slideStyle}>

                    {/* <Carousel.Caption> */}
                    <br></br>
                    <h1 style={{color: '#343a40'}}>Stack Experience</h1>
                    <br></br>
                    <br></br>
                    <ul style={{color: '#343a40', textAlign: 'left'}}>
                        <li><strong>Languages:</strong> Ruby, JavaScript, Python, SQL, HTML, CSS</li>
                        <li><strong>Framework, libraries, databases</strong> React, Rails, Flask, Postgres, MongoDB</li>
                        <li><strong>TDD Testing:</strong> RSpec, Jasmine, Jest, Unittest,Capybara</li>
                        <li><strong>Others:</strong>Command Line, Github, TravisCI, Heroku, AWS</li>
                        <li><strong>Methodoloty: </strong>AGILE working environment, pair 	programming, daily stand-ups and retros, planning 2-day sprints, MVP, Trello Board and various project design by using diagrams and wireframe</li>
                    </ul>
                    {/* </Carousel.Caption> */}
                </Carousel.Item>
                {/* <Carousel.Item>


                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item> */}
                </Carousel>

        </div>
    )
}

const slideStyle = {
    backgroundColor: 'white',
    maxWidth: '50%', 
    minHeight: '30rem',
    border: 'solid', 
    borderColor: 'white', 
    marginLeft: '25%',
    boxShadow: '25px 25px 20px #778899', 
    marginBottom: '3%', 
    paddingBottom: '6rem'
}