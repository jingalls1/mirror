import React from "react";
import axios from "axios";
const newsAPI =
  "https://newsapi.org/v2/top-headlines?" +
  "country=us&" +
  "apiKey=fe80a73d44b04fd2a742a3e5c35506e2";

export default class News extends React.Component {
  constructor(props) {
    super(props);
    this.state = { news: [] };
  }
  componentDidMount() {
    axios.get(newsAPI).then(res => this.setState({ news: res.data.articles }));
  }
  newsHandler = () => {
    if (this.state.news.length < 1) {
      return <div>&nbsp;</div>;
    } else {
      let arrTest = [];
      for (let i = 0; i < 4; i++) {
        arrTest.push(
          <div className="Row" key={i}>
            <div className="Cell">
              <span style={{ fontFamily: "Calibri" }}>
                &diams;&nbsp;{(this.state.news[i].title)}
              </span>
            </div>
          </div>
        );
      }
      return <div className="Table">{arrTest}</div>;
    }
  };

  render() {
    return <div>{this.newsHandler()}</div>;
  }
}
