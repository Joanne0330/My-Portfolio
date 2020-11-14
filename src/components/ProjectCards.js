import React from 'react';
import '../App.css';
import Card from "react-bootstrap/Card";

export class ProjectCards extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div style={pageStyle}>
                    {this.props.data.map((project) => {
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

export default ProjectCards;

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