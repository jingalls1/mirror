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
      icoSize: 23
    };
  }

  componentDidMount = () => {
    axios.get(weatherAPI).then(res =>
      this.setState({
        temp: res.data.main.temp,
        sky: res.data.weather[0].main,
        sunrise: res.data.sys.sunrise,
        sunset: res.data.sys.sunset
      })
    );
  };

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
      return <WiNightAltPartlyCloudy size={25} color="white" />;
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

  render() {
    return (
      <div style={{ fontSize: "1.5em" }}>
        <br /> {this.iconHandler()}
        {this.twoDecimals(this.state.temp)}&#176;{""}
        <span style={{ fontSize: "10px" }} />
      </div>
    );
  }
}
