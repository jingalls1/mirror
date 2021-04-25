import React from 'react';

export default class Portland extends React.Component {
    constructor(props){
        super(props);
        this.state={}
    }

    render() {
        return(
            <div >
            <div style={{borderRadius: "250px", width: "425", overflow: "hidden"}}>
                <iframe src='https://www.youtube.com/embed/rLI1sxma58g?autoplay=1'
                    frameBorder='0'
                    allow='autoplay; encrypted-media'
                    allowFullScreen
                    title='video'
                    width='708'
                    height='400'

                />
                </div>
            </div>
        )
    }
}
