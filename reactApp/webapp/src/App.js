import React from 'react';
import logo from './logo.svg';
import './App.css';





class App extends React.Component {
  state = {
    imgurl : undefined,
    
  }

    componentDidMount = async(e) => {
      const url = "https://app.ticketmaster.com/discovery/v2/events.json?apikey=mLGxhaIVykD4qeMZWvIi8lmIoMf7RAP7&latlong=42.0307812,-93.63191309999999";
      const response = await fetch(url);
      const data = await response.json();
      var randomEvent =Math.floor(Math.random()*(20 - 0));
      console.log(randomEvent);
      this.setState({
        imgurl: data._embedded.events[randomEvent].images[0].url
      }
      )
      console.log(data);
    }



render(){
  return (
    <div> <img src={this.state.imgurl} alt="Error"/>
    </div>
  );
}
}



export default App;
