import React from "react";
//import { fucky } from "./fucky.js";

const Hwy =
  "https://dev.virtualearth.net/REST/v1/Routes?key=AlDiTPLynjWwuVqhTIE7XZ76a-cP_iqlOUR6ujpQG9DMlc-20o_fllORgQX5xQnw&distanceUnit=Mile&wayPoint.0=45.417671,-122.733304&waypoint.3=45.495809, -122.791415&viaWaypoint.1=45.534891,-122.867394&viaWaypoint.2=45.523003,-122.818032";
const Walker =
  "https://dev.virtualearth.net/REST/v1/Routes?key=AlDiTPLynjWwuVqhTIE7XZ76a-cP_iqlOUR6ujpQG9DMlc-20o_fllORgQX5xQnw&distanceUnit=Mile&wayPoint.0=45.417671,-122.733304&waypoint.6=45.495809, -122.791415&viaWaypoint.1=45.512532,-122.853462&viaWaypoint.2=45.507690,-122.841285&viaWaypoint.3=45.515336,-122.839515&viaWaypoint.4=45.513382,-122.827637&viaWaypoint.5=45.502486, -122.808884";
const Jenkins =
  "https://dev.virtualearth.net/REST/v1/Routes?key=AlDiTPLynjWwuVqhTIE7XZ76a-cP_iqlOUR6ujpQG9DMlc-20o_fllORgQX5xQnw&distanceUnit=Mile&wayPoint.0=45.417671,-122.733304&waypoint.6=45.495809, -122.791415&viaWaypoint.1=45.512515,-122.854926&viaWaypoint.2=45.507632,-122.840995&viaWaypoint.3=45.503245,-122.824253&viaWaypoint.4=45.503846,-122.816372&viaWaypoint.5=45.503846,-122.816372";

export default class Traffic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      trafficTime1: 0,
      trafficLevel1: "",
      trafficTime2: 0,
      trafficLevel2: "",
      trafficTime3: 0,
      trafficLevel3: ""
    };
  }

  componentDidMount() {
    this.interval = setInterval(
      () => this.setState({ time: Date.now() }),
      60000
    );
    fetch(Hwy)
      .then(res => res.json())
      .then(result => {
        this.setState({
          trafficTime1:
            result.resourceSets[0].resources[0].travelDurationTraffic,
          trafficLevel1: result.resourceSets[0].resources[0].trafficCongestion
        });
        //console.log("Response is: "+result.resourceSets[0].resources[0].travelDuration);
        //this.setState({ trafficTime1: result.resourceSets[0].resources[0].travelDuration})
      })
      .catch(error => console.log("Error is: " + error));
    fetch(Walker)
      .then(res => res.json())
      .then(result => {
        this.setState({
          trafficTime2:
            result.resourceSets[0].resources[0].travelDurationTraffic,
          trafficLevel2: result.resourceSets[0].resources[0].trafficCongestion
        });
        //console.log("Response is: "+result.resourceSets[0].resources[0].travelDuration);
        //this.setState({ trafficTime1: result.resourceSets[0].resources[0].travelDuration})
      })
      .catch(error => console.log("Error is: " + error));
    fetch(Jenkins)
      .then(res => res.json())
      .then(result => {
        this.setState({
          trafficTime3:
            result.resourceSets[0].resources[0].travelDurationTraffic,
          trafficLevel3: result.resourceSets[0].resources[0].trafficCongestion
        });
        //console.log("Response is: "+result.resourceSets[0].resources[0].travelDuration);
        //this.setState({ trafficTime1: result.resourceSets[0].resources[0].travelDuration})
      })
      .catch(error => console.log("Error is: " + error));
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  coloredTraffic = level => {
    if (level === "Mild") {
      return "green";
    } else if (level === "Medium") {
      return "#cf8a00";
    } else {
      return "red";
    }
  };

  twoDecimals = number => {
    let minutes = number / 60;
    let rounded = Math.round(minutes * 1) / 1;
    return rounded;
  };

  trafficFunc1 = () => {
    let time = this.trafficTime1 / 60;
    return time;
  };

  render() {
    //console.log(fucky.resourceSets[0].resources[0].travelDuration)
    return (
      <div>
        <div>
          <span className="routes">Highway 26 &#8195;</span>{" "}
          <span
            style={{
              textShadow: `2px 2px 4px ${this.coloredTraffic(
                this.state.trafficLevel1
              )}`
            }}
          >
            {this.twoDecimals(this.state.trafficTime1)} minutes (
            {this.state.trafficLevel1} Traffic)
          </span>
        </div>
        <div>
          <span className="routes">Walker Rd. &#8195;&nbsp;&nbsp;</span>{" "}
          <span
            style={{
              textShadow: `2px 2px 4px ${this.coloredTraffic(
                this.state.trafficLevel2
              )}`
            }}
          >
            {this.twoDecimals(this.state.trafficTime2)} minutes (
            {this.state.trafficLevel2} Traffic)
          </span>
        </div>
        <div>
          <span className="routes">Jenkins Rd. &#8195;&nbsp;</span>{" "}
          <span
            style={{
              textShadow: `2px 2px 4px ${this.coloredTraffic(
                this.state.trafficLevel3
              )}`
            }}
          >
            {this.twoDecimals(this.state.trafficTime3)} minutes (
            {this.state.trafficLevel3} Traffic)
          </span>
        </div>
      </div>
    );
  }
}
