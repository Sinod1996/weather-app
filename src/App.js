import React, {Component} from 'react';
import Weather from "./component/Weather";
import axios from "axios";
import _ from 'lodash';

const KEY = `e8fd827aa839ddaebcd1bb41084467a9`

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            country: "",
            temperature: "",
            wind: "",
            icon: "",
            weather: "",
            countryCode: ''
        }

    }

    getWeather = async (ev, value) => {
        ev.preventDefault()
        const {data} = await axios.get(`https://api.openweathermap.org/data/2.5/weather?`, {
            params: {
                q: value,
                appid: KEY,
                units: "metric"
            }
        })
        console.log(data)
        this.setState({
            country: data.name,
            temperature: _.floor(data.main.temp),
            wind: _.floor(data.wind.speed),
            icon: data.weather[0].icon,
            weather: data.weather[0].main,
            countryCode: data.sys.country
        })
    }

    render() {
        const {country, countryCode, temperature, wind, icon, weather} = this.state;
        return (
            <div>
                <Weather onSubmit={this.getWeather}
                         country={country}
                         countryCode = {countryCode}
                         temp={temperature}
                         wind={wind}
                         icon={icon}
                         weather={weather}/>
            </div>
        );
    }
}

export default App;