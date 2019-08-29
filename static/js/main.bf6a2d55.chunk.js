(window.webpackJsonpmirror=window.webpackJsonpmirror||[]).push([[0],{33:function(e,t,a){e.exports=a(66)},65:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),i=a(31),s=a.n(i),c=a(4),l=a(5),o=a(8),u=a(6),f=a(9),m=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).secondsFunct=function(){},a.zeroFunc=function(e){if(e<10){var t=e.toString();return t=0+t}return e},a.dateFunc2=function(){var e=new Date,t=e.getHours(),n=e.getMinutes(),i=e.getSeconds();if(t<=12)return r.a.createElement("span",null,r.a.createElement("span",null,"Portland Time"),r.a.createElement("div",{style:{fontWeight:"bold",fontSize:"2em"}},t,":",a.zeroFunc(n),":",r.a.createElement("span",{style:{fontSize:".5em"}},a.zeroFunc(i),"\xa0am")));var s=t-12;return r.a.createElement("span",null,r.a.createElement("span",{style:{fontSize:"1.2em"}},"Portland Time:"),r.a.createElement("div",{style:{fontWeight:"bold",fontSize:"4em"}},s,":",a.zeroFunc(n),":",r.a.createElement("span",{style:{fontSize:".5em"}},a.zeroFunc(i),"\xa0pm")))},a.state={},a}return Object(f.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.interval=setInterval(function(){return e.setState({time:Date.now()})},1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",null,this.dateFunc2()))}}]),t}(r.a.Component),h=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).greet=function(){var e=(new Date).getHours();e<12?a.setState({message:"Good Morning, Jacob"}):e>=12&&e<17?a.setState({message:"Good Afternoon, Jacob"}):a.setState({message:"Good Evening, Jacob"})},a.state={message:""},a}return Object(f.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.greet(),this.interval=setInterval(function(){e.greet()},6e4)}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"greeting"},"\xa0\xa0\xa0",this.state.message))}}]),t}(r.a.Component),v=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).coloredTraffic=function(e){return"Mild"===e?"rgb(15, 219, 22, 0.3)":"Medium"===e?"rgb(236, 240, 36, 0.3)":"rgba(201, 76, 76, 0.3)"},a.twoDecimals=function(e){var t=e/60;return Math.round(1*t)/1},a.trafficFunc1=function(){return a.trafficTime1/60},a.state={trafficTime1:0,trafficLevel1:"",trafficTime2:0,trafficLevel2:"",trafficTime3:0,trafficLevel3:"",rsize:"2.7em",hours:0,minutes:9,months:0,days:0},a}return Object(f.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.fetcher(),this.interval=setInterval(function(){e.fetcher()},3e5)}},{key:"fetcher",value:function(){var e=this;fetch("https://dev.virtualearth.net/REST/v1/Routes?key=AlDiTPLynjWwuVqhTIE7XZ76a-cP_iqlOUR6ujpQG9DMlc-20o_fllORgQX5xQnw&distanceUnit=Mile&wayPoint.0=45.417671,-122.733304&waypoint.3=45.495809, -122.791415&viaWaypoint.1=45.534891,-122.867394&viaWaypoint.2=45.523003,-122.818032").then(function(e){return e.json()}).then(function(t){e.setState({trafficTime1:t.resourceSets[0].resources[0].travelDurationTraffic,trafficLevel1:t.resourceSets[0].resources[0].trafficCongestion})}).catch(function(e){return console.log("Error is: "+e)}),fetch("https://dev.virtualearth.net/REST/v1/Routes?key=AlDiTPLynjWwuVqhTIE7XZ76a-cP_iqlOUR6ujpQG9DMlc-20o_fllORgQX5xQnw&distanceUnit=Mile&wayPoint.0=45.417671,-122.733304&waypoint.6=45.495809, -122.791415&viaWaypoint.1=45.512532,-122.853462&viaWaypoint.2=45.507690,-122.841285&viaWaypoint.3=45.515336,-122.839515&viaWaypoint.4=45.513382,-122.827637&viaWaypoint.5=45.502486, -122.808884").then(function(e){return e.json()}).then(function(t){e.setState({trafficTime2:t.resourceSets[0].resources[0].travelDurationTraffic,trafficLevel2:t.resourceSets[0].resources[0].trafficCongestion})}).catch(function(e){return console.log("Error is: "+e)}),fetch("https://dev.virtualearth.net/REST/v1/Routes?key=AlDiTPLynjWwuVqhTIE7XZ76a-cP_iqlOUR6ujpQG9DMlc-20o_fllORgQX5xQnw&distanceUnit=Mile&wayPoint.0=45.417671,-122.733304&waypoint.6=45.495809, -122.791415&viaWaypoint.1=45.512515,-122.854926&viaWaypoint.2=45.507632,-122.840995&viaWaypoint.3=45.503245,-122.824253&viaWaypoint.4=45.503846,-122.816372&viaWaypoint.5=45.503846,-122.816372").then(function(e){return e.json()}).then(function(t){e.setState({trafficTime3:t.resourceSets[0].resources[0].travelDurationTraffic,trafficLevel3:t.resourceSets[0].resources[0].trafficCongestion})}).catch(function(e){return console.log("Error is: "+e)});var t=new Date,a=t.getDate(),n=t.getMonth(),r=t.getHours(),i=t.getMinutes();this.setState({hours:r,minutes:i,days:a,months:n})}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("span",{className:"routes"},"Highway 26 \u2003")," ",r.a.createElement("span",{style:{textShadow:"2px 2px 4px ".concat(this.coloredTraffic(this.state.trafficLevel1)),backgroundColor:this.coloredTraffic(this.state.trafficLevel1),borderRadius:"30px",fontSize:"".concat(this.state.rsize)}},this.twoDecimals(this.state.trafficTime1)," minutes (",this.state.trafficLevel1," Traffic)")),r.a.createElement("div",null,r.a.createElement("span",{className:"routes"},"Walker Rd. \u2003\xa0\xa0")," ",r.a.createElement("span",{style:{textShadow:"2px 2px 4px ".concat(this.coloredTraffic(this.state.trafficLevel2)),backgroundColor:this.coloredTraffic(this.state.trafficLevel2),borderRadius:"30px",fontSize:"".concat(this.state.rsize)}},this.twoDecimals(this.state.trafficTime2)," minutes (",this.state.trafficLevel2," Traffic)")),r.a.createElement("div",null,r.a.createElement("span",{className:"routes"},"Jenkins Rd. \u2003\xa0")," ",r.a.createElement("span",{style:{textShadow:"2px 2px 4px ".concat(this.coloredTraffic(this.state.trafficLevel3)),backgroundColor:this.coloredTraffic(this.state.trafficLevel3),borderRadius:"30px",fontSize:"".concat(this.state.rsize)}},this.twoDecimals(this.state.trafficTime3)," minutes (",this.state.trafficLevel3," Traffic)")),r.a.createElement("h2",{style:{fontSize:"0.75em"}},"Refreshed: ",this.state.months,"/",this.state.days," ",this.state.hours,":",this.state.minutes," "))}}]),t}(r.a.Component),d=a(13),p=a.n(d),E=a(11),y=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).newsHandler=function(){if(a.state.news.length<1)return r.a.createElement("div",null,"\xa0");for(var e=[],t=[],n=0;n<10;n++)t.push("".concat(a.state.news[n].title)),e.push(r.a.createElement("div",{className:"Row",key:n},r.a.createElement("div",{className:"Cell"},r.a.createElement("div",{style:{fontFamily:"Calibri",fontSize:"1.5em"}},r.a.createElement("img",{src:"https://i.imgur.com/KXyavaT.png",height:"20",alt:"news"}),"\xa0\xa0",a.state.news[n].title))));return r.a.createElement("div",{className:"TableCenter"},r.a.createElement("div",{className:"Row"}," "),r.a.createElement(E.a,{interval:a.state.i},a.shiftArr(e,3)),r.a.createElement("br",null),r.a.createElement(E.a,{interval:a.state.i},a.shiftArr(e,2)),r.a.createElement("br",null),r.a.createElement(E.a,{interval:a.state.i},a.shiftArr(e,1)),r.a.createElement("br",null),r.a.createElement(E.a,{interval:a.state.i},e))},a.state={news:[],i:6e3},a}return Object(f.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.fetcher(),this.interval=setInterval(function(){e.fetcher()},6e5)}},{key:"fetcher",value:function(){var e=this;p.a.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=fe80a73d44b04fd2a742a3e5c35506e2").then(function(t){return e.setState({news:t.data.articles})});var t=new Date;console.log("NEWS updates: ".concat(t.getHours(),":").concat(t.getMinutes()))}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"shiftArr",value:function(e,t){var a=e.length-t,n=e.slice(0,a);return e.slice(a).concat(n)}},{key:"render",value:function(){return r.a.createElement("div",null,this.newsHandler())}}]),t}(r.a.Component),g=a(7),w=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).componentDidMount=function(){a.fetcher(),a.interval=setInterval(function(){a.fetcher()},6e5)},a.time=function(){var e=new Date(1e3*a.state.sunrise),t=new Date(1e3*a.state.sunset),n=(new Date).getHours(),r=e.getHours();return n>=t.getHours()||n<=r},a.twoDecimals=function(e){return Math.round(1*e)/1},a.iconHandler=function(){return!0===a.time()?r.a.createElement(g.f,{size:a.state.icoSize,color:"white"}):"Clear"===a.state.sky?r.a.createElement(g.e,{size:a.state.icoSize,color:"white"}):"Clouds"===a.state.sky?r.a.createElement(g.a,{size:a.state.icoSize,color:"white"}):"Rain"===a.state.sky?r.a.createElement(g.c,{size:a.state.icoSize,color:"white"}):"Thunderstorm"===a.state.sky?r.a.createElement(g.b,{size:a.state.icoSize,color:"white"}):"Drizzle"===a.state.sky?r.a.createElement(g.d,{size:a.state.icoSize,color:"white"}):r.a.createElement("span",null,"\xa0")},a.state={temp:0,sky:"",sunrise:0,sunset:0,icoSize:40},a}return Object(f.a)(t,e),Object(l.a)(t,[{key:"fetcher",value:function(){var e=this;p.a.get("https://api.openweathermap.org/data/2.5/weather?zip=97003,us&APPID=8e44c500eae35929bb2690f0b5c52ac5&units=imperial").then(function(t){return e.setState({temp:t.data.main.temp,sky:t.data.weather[0].main,sunrise:t.data.sys.sunrise,sunset:t.data.sys.sunset})});var t=new Date;console.log("WEATHER updated: ".concat(t.getHours(),":").concat(t.getMinutes()))}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){return r.a.createElement("div",{style:{fontSize:"4em"}},r.a.createElement("br",null)," ",this.iconHandler(),this.twoDecimals(this.state.temp),"\xb0","",r.a.createElement("span",{style:{fontSize:"0px"}}))}}]),t}(r.a.Component),b=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={},a}return Object(f.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return console.log("UPDATED CODE: [8/25/19 3:45] all components refresh on schedule, and say when they refreshed in the console"),r.a.createElement("div",{className:"App"},r.a.createElement("br",{style:{lineHeight:3}}),r.a.createElement("div",{className:"rowC"},r.a.createElement("div",{style:{marginLeft:"15%"}},r.a.createElement("img",{src:"https://jandamarketing.com/wp-content/uploads/2016/10/earth.gif",height:"125px",alt:"Logo"})),r.a.createElement("div",{className:"TableRight"},r.a.createElement("div",{className:"Row"},r.a.createElement("div",{className:"Cell"},r.a.createElement(h,null))))),r.a.createElement("br",null),r.a.createElement("div",{className:"rowC"},r.a.createElement("div",{className:"Table"},r.a.createElement("div",{className:"Row"},r.a.createElement("span",{className:"routetitle"},"Travel Time to Milestone Systems"),r.a.createElement("br",{style:{lineHeight:"2"}})),r.a.createElement("div",{className:"Row"},r.a.createElement("div",{className:"Cell"},r.a.createElement(v,null)))),r.a.createElement("div",{className:"TableRight"},r.a.createElement("div",{className:"Row"},r.a.createElement("div",{className:"Cell"},r.a.createElement(m,null))),r.a.createElement("div",{className:"Row"}),r.a.createElement(w,null))),r.a.createElement("br",null),r.a.createElement(y,null))}}]),t}(r.a.Component),S=(a(65),document.getElementById("root"));s.a.render(r.a.createElement(b,null),S)}},[[33,1,2]]]);
//# sourceMappingURL=main.bf6a2d55.chunk.js.map