import React, {Component} from 'react';
import Form from "./Form";

class Weather extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        const {country, countryCode,  temp, wind, icon, weather} = this.props;
        return (
            <div >
                <Form onSubmit={this.props.onSubmit}/>
                {icon ? <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`}/> : null}
                <div className={'weather'}>
                    <p>Country: <span>{country}   {countryCode}</span></p>
                    <p>Temperature: <span>{`${temp}`}&deg;</span></p>
                    <p>Wind:<span> {wind}</span></p>
                    <p>Weather: <span>{weather}</span></p>
                </div>
            </div>
        );
    }
}

export default Weather;