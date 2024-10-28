import React from 'react';
import './App.css';
import Greeting from "./component/greeting";
import Age from "./component/age";

function App() {
  return (
   <div className='App'>
    <Greeting name="John"/>
    <Age age={25}/>
   </div>
  )
}

export default App;
