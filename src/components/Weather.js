import React from "react";
import '../App.css';

export class Weather extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            temperature: "",
            city: "",
            weather: ""

        }
    }

    componentDidMount() {
        fetch("http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=b94bca2bf05431ed9f7a78c38b49a0ee&units=metric")
            .then(response => response.json())
            .then(data => {
                console.log(data)
                this.setState({temperature: data.main.temp, city: data.name, weather: data.weather[0].description})

            })
    }
   
    render() {
        return(
            <div>
                <h5>Location: {this.state.city} | Weather: {this.state.weather} | Temperature: {this.state.temperature}C˚</h5>
            </div>
        )
    }

}

export default Weather;