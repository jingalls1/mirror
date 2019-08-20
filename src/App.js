import React from "react";
import Time from "./time.js";
import Greeting from "./greeting.js";
import Traffic from "./worktraffic.js";
import News from "./news.js";
import Weather from "./weather.js";
//import Spotify from "./spotify.js";

const gif = "https://jandamarketing.com/wp-content/uploads/2016/10/earth.gif";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="App">
        <br style={{ lineHeight: 3 }} />
        <div className="rowC">
          <div style={{ marginLeft: "12%" }}>
            <img src={gif} height="75px" alt="Logo" />
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
            <Weather />
          </div>

          {/* End Time Table */}
        </div>
        <br />
        {/*Begin News*/}
        <h2
          style={{
            textAlign: "left",
            marginLeft: "25%",
            textDecoration: "underline"
          }}
        >
          News
        </h2>
        <News />
        {/*End News*/}
      </div>
    );
  }
}
