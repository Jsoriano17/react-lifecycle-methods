import React from 'react';
import logo from './logo.svg';
import './App.css';

class WindowInfo extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      screenWidth: 0,
      screenHeight: 0
    }
  }

  updateWindowDimensions = () => {
    this.setState({
      screenWidth: window.innerWidth,
      screenHeight: window.innerHeight
    })
  }
  componentDidMount() { 
    this.updateWindowDimensions()
    window.addEventListener('resize', this.updateWindowDimensions)
  }
  render() {
    const {screenWidth, screenHeight} = this.state
    return (
      <div className="App">
        <p>screenHeight: {screenHeight}</p>
        <p>screenWidth: {screenWidth}</p>
      </div>
    );
  }
}

export default WindowInfo;