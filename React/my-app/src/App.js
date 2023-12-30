import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar.js'
import Footer from './Footer.js';
import { useState } from 'react';

function App() {

  let heading3 = "Here we will Learn React.js"
  let github = "http://github.com/omarghassan"
  // let message = "Hello React"
  let [message, setMessage] = useState("Hello React")

  const handleClick = () => {
    console.log("Hello World!")
  }

  const handleClickWithName = (theName) => {
    console.log("Hello " + theName)
  }

  const changeMessage = () => {
    setMessage("Updated Message")
  }

  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <h1>Hello and Welcome</h1>
        <h3>{heading3}</h3>
        <p>{10 * 50}</p>
        <img src={logo} className="App-logo" alt="logo" />
        <p style={{ fontSize: "25px" }}>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Start to Learn React
        </a>
        <a
          className="App-link"
          href={github}
          target="_blank"
          rel="noopener noreferrer">
          GO to Github
        </a>

        <button className="btn-click" onClick={handleClick}>Click</button>
        <button className="btn-click" onClick={() => handleClickWithName("Omar")}>Click</button>
        <button className="btn-click" onClick={changeMessage}>Click</button>
      </header>
      <Footer />
    </div>
  );
}

export default App;
