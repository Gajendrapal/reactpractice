import React from 'react';
import logo from './logo.svg';
import './App.css';
import Clickbutton from "./components/Button"
import GoogleSearchBox from "./components/GooglePage"
import Googlelogo from './GoogleLogo.png';

function App() {
  return (
    <div className="App">
    <div className="App-header">
      <form>
      <img src={Googlelogo} className="App-logo" alt="logo" />
        
         
        <GoogleSearchBox customprops="i m custom" />
               
        <Clickbutton  buttonName="Submit"clickbutton={function1} buttontype="submit"/>
 
        </form>
        </div>

    </div>
  );
}

function function1()
{
  alert("1 click")
}


export default App;
