/*jshint esversion: 6 */

import React from "react";
import axios from "axios";
import { WiDaySunny } from "weather-icons-react";
import { WiCloud } from "weather-icons-react";
import { WiDayRain } from "weather-icons-react";
import { WiDayLightning } from "weather-icons-react";
import { WiDayShowers } from "weather-icons-react";
import { WiNightAltPartlyCloudy } from "weather-icons-react";

const weatherAPI =
  "https://api.openweathermap.org/data/2.5/weather?zip=97003,us&APPID=8e44c500eae35929bb2690f0b5c52ac5&units=imperial";

export default class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temp: 0,
      sky: "",
      sunrise: 0,
      sunset: 0,
      icoSize: "150"
    };
  }

  componentDidMount = () => {
    this.fetcher()
    this.interval = setInterval(() => {this.fetcher()}, 600000)
  };
  fetcher() {
    axios.get(weatherAPI).then(res =>
      this.setState({
        temp: res.data.main.temp,
        sky: res.data.weather[0].main,
        sunrise: res.data.sys.sunrise,
        sunset: res.data.sys.sunset
      })
    );
    let d = new Date();
    console.log(`WEATHER updated: ${d.getHours()}:${d.getMinutes()}`)
  }
  componentWillUnmount() {
    clearInterval(this.interval)
  }

  time = () => {
    let drise = new Date(this.state.sunrise * 1000);
    let dset = new Date(this.state.sunset * 1000);
    let d = new Date();
    let hours = d.getHours();
    let risehours = drise.getHours();
    let sethours = dset.getHours();
    if (hours >= sethours || hours <= risehours) {
      return true;
    } else return false;
  };

  twoDecimals = number => {
    let rounded = Math.round(number * 1) / 1;
    return rounded;
  };

  iconHandler = () => {
    if (this.time() === true) {
      return <WiNightAltPartlyCloudy size={this.state.icoSize} color="white" />;
    } else if (this.state.sky === "Clear") {
      return <WiDaySunny size={this.state.icoSize} color="white" />;
    } else if (this.state.sky === "Clouds") {
      return <WiCloud size={this.state.icoSize} color="white" />;
    } else if (this.state.sky === "Rain") {
      return <WiDayRain size={this.state.icoSize} color="white" />;
    } else if (this.state.sky === "Thunderstorm") {
      return <WiDayLightning size={this.state.icoSize} color="white" />;
    } else if (this.state.sky === "Drizzle") {
      return <WiDayShowers size={this.state.icoSize} color="white" />;
    } else return <span>&nbsp;</span>;
  };
  rain() {
    if (this.state.sky=== "Rain") {
      return <span>It's rainin' man!</span>
    } else {
      return null
    }
  }

  render() {
    return (
      <div className="TableRight" style={{ fontSize: "4em" }}>
        <div className="Row">
        <div className="Cell">
          <br /> {this.iconHandler()}
          {this.rain()}
          </div>
        <div className="Cell" style={{fontWeight: "bold"}}>
          {this.twoDecimals(this.state.temp)}&#176;{""}
          </div>
        </div>
      </div>
    );
  }
}
