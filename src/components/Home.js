import React from "react";
import '../App.css';
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Joanne from "../images/Joanne.png";

export default function Home() {
    return (
        <div style={{backgroundColor: 'gainsboro'}}>
            <Container style={{paddingBottom: '12rem', paddingTop: '2rem'}}>
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
                    <br></br>
                    <br></br>
                    <h2 style={{color: '#343a40'}}>Stack & Experience</h2>
                    <br></br>
                    <br></br>
                    <ul style={{color: '#343a40', textAlign: 'left'}}>
                        <li><strong>Languages:</strong> Ruby, JavaScript, Python, SQL, HTML, CSS</li>
                        <li><strong>Framework, libraries, databases</strong> React, Rails, Flask, Postgres, MongoDB</li>
                        <li><strong>TDD Testing:</strong> RSpec, Jasmine, Jest, Unittest, Capybara</li>
                        <li><strong>Other Tech:</strong> Command Line, Github, TravisCI, Heroku, AWS</li>
                        <li><strong>Methodology:</strong> AGILE working environment, pair programming, daily stand-ups and retros, planning 2-day sprints, MVP, Trello Board and various project design by using diagrams and wireframe</li>
                        <li><strong>Public Projects:</strong> AgeUK</li>
                    </ul>
                </Carousel.Item>

                <Carousel.Item style={slideStyle}>
                    <br></br>
                    <h2 style={{color: '#343a40'}}>About me...</h2>
                    <br></br>
                    <p style={{color: '#343a40', padding: '2rem'}}>
                        Before discovering my passion for coding, I had an active career as a classical violinist, performing concerts all over the world with orchestras such as the BBC Symphony Orchestra, Royal Philharmonic Orchestra, London Philharmonic Orchestra, and many more. 
                        I was also a dedicated violin teacher, patient and methodical, helping students age 7-18 to achieve their goals and develop their musical talent. I am now transforming my passion and problem solving skills to software development.
                    <br></br>
                    <br></br>
                        In my spare time I love to travel, absorbing nature and culture wherever I go. I'm also a foodie who likes to cook and explore different recipes. I'm fluent in both English and Mandarin Chinese, and I speak a little French.
                    </p>
                </Carousel.Item>
            </Carousel>
            </Container>
        </div>
    )
}

const slideStyle = {
    backgroundColor: 'white',
    maxWidth: '50%', 
    minHeight: '30rem',
    // maxHeight: '30rem',
    border: 'solid', 
    borderColor: 'white', 
    marginLeft: '25%',
    boxShadow: '25px 25px 20px #778899', 
    marginBottom: '3%', 
    // paddingBottom: '10rem'
}