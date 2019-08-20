import React from "react";

export default class Greeting extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    greetingFunc = () => {
        let d = new Date();
        let hours = d.getHours()
        if (hours < 12 ) {
            return <div className="greeting">&nbsp;&nbsp;&nbsp;Good Morning, Jacob</div>
        } else if (hours >= 12 && hours < 17) {
            return <div className="greeting">&nbsp;&nbsp;&nbsp;Good Afternoon, Jacob</div>
        } else {
            return <div className="greeting">&nbsp;&nbsp;&nbsp;Good Evening, Jacob</div>
        }
    }


    render() {
        return(
            <div>
                {this.greetingFunc()}
            </div>
        )
    }
}