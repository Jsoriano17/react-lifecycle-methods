import React from 'react';
import logo from './logo.svg';
import './App.css';
import WindowInfo from './WindowInfo';
import Animation from './Animation';
import MouseInfo from './MouseInfo';

class App extends React.Component {
  constructor(props){
    super(props)
  }
  componentDidMount() { 
  }
  
  render() {
    return (
      <div className="App" style={{display:'flex', justifyContent:'center', flexDirection:'column' , alignItems:'center'}}>
        <WindowInfo />
        <MouseInfo />
        <Animation width={400} height={400} />
        {/* add mouse position so when you move your mouse it shows x and y coordinates on it */}
        {/* passing props that will be used in styling */}
      </div>
    );
  }
}

export default App;
