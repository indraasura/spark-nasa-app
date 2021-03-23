import React, { Component } from 'react';
import axios from 'axios'
import './App.css';
import Apod from './components/Apod';


const API_KEY = 'MERt4XMM5kEdCJVdeaFuiLHjeXpy9Sl4OW6OR01k'

class App extends Component {
  state = { 
    apodImg: '',
    imgTitle: '',
    imgDesc: '',
    imgDate: '',
    searchRes: [],
    isClicked: false
   }
  componentDidMount = () => {
    // fetch img from API and pass it to Apod component
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`)
      .then(res => {
        //console.log(res)
        return res.data.url
      })
      .then(apodImg => {
        this.setState({
          apodImg
        })
      })
  }
  render() { 
    return ( 
      <div class="container">
        <Apod apodImg={this.state.apodImg}/>
      </div>
    );
  }
}
 
export default App;


