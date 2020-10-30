import React from "react";
import '../App.css';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";


export default function Info() {

    return(
        <div>
            <Container style={{paddingBottom: '12rem', paddingTop: '2rem'}}>
            <Card className="text-center" style={cardStyle}>
                <Card.Header>CV and Profile Links</Card.Header>
                <Card.Body>
                <Card.Text>
                    To know more about me, please click on the buttons below:
                </Card.Text>
                    
                <Button
                    href="https://github.com/Joanne0330/CV"
                    target="_blank"
                    className="fab fa-github"
                    variant="secondary"
                    size="lg" block
                    ><p style={{fontSize: '18px'}}>GitHub CV</p>
                </Button>
                <Button
                    href="https://www.linkedin.com/in/joanne-chen-1253319b"
                    target="_blank"
                    className="fab fa-linkedin"
                    variant="secondary"
                    size="lg" block
                    ><p style={{fontSize: '18px'}}>LinkedIn Profile</p>
                </Button>

                </Card.Body>
            </Card>
            </Container>
        

        </div>
    )
}

const cardStyle = {
    // display: 'center',
    // justityContent: 'center',
    minWidth: '20rem',
    maxWidth: '40rem',
    minHeight: '20rem',
    maxHeight: '20rem',
    marginLeft: '20%',
    marginRight: '20%',
    boxShadow: '25px 25px 20px #778899'
}

