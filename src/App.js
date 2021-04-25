import React from "react";
import Time from "./time.js";
import Greeting from "./greeting.js";
import Traffic from "./worktraffic.js";
import News from "./news.js";
//import Weather from "./weather.js";
//import Spotify from "./spotify.js";
import Cameras from "./cameras.js";
import Holiday from "./holidays.js";
//import Portland from "./portlandCam.js";

const gif = "https://jandamarketing.com/wp-content/uploads/2016/10/earth.gif";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log('UPDATED CODE: [10/9/19 3:45] added portland cam from rev hall')
    return (
      <div className="App">
        <br style={{ lineHeight: 3 }} />
        <div className="rowC">
          <div style={{ marginLeft: "15%" }}>
          {/*  <img src={gif} height="125px" alt="Logo" /> */}
          </div>
          {/* Start Greeting Table */}
          <div className="TableRight">
            <div className="Row">
              <div className="Cell">
                <Greeting />
              </div>
            </div>
          </div>
          {/* End Greeting Table */}
        </div>

        <br />
        <div className="rowC">
          {/*Start Traffic Table*/}
          <div className="Table">
            <div className="Row">
              <span className="routetitle">
                Travel Time to Milestone Systems
              </span>
              <br style={{ lineHeight: "2" }} />
            </div>

            <div className="Row">
              <div className="Cell">
                <Traffic />
              </div>
            </div>
            <br/>
            {/*<img style={{borderRadius: "30px"}}name="main" id="main" border="0" width="640" height="480" src="http://208.72.70.171/mjpg/video.mjpg"/>*/}
            {/*Start IP Cameras*/}
            <div className="Row">
              <div className="Cell">
              <Cameras/>
              <Holiday/>
              </div>
            </div>

            {/*Start Portland Skyline*/}
            {/*
            <div className="Row">
              <div className="Cell">
                <Portland/>
              </div>
            </div>
          */}
            {/*End Portland Skyline */}

            {/*End IP Cameras*/}
          </div>

          {/* End Traffic Table*/}
          {/* Start Time Table*/}
          <div className="TableRight">
            <div className="Row">
              <div className="Cell">
                <Time />
              </div>
            </div>
            <div className="Row" />
            {/*<Weather />*/}
          </div>

          {/* End Time Table */}
        </div>
        <br />
        {/*Begin News*/}

        <News />
        {/*End News*/}
      </div>
    );
  }
}
