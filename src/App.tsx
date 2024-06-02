import React from "react";
import Hero from "./components/Hero";
//import Description from "./components/Description";
import Header from "./components/Header";
import Section from "./components/Section";
import Menu from "./components/Menu";
const App: React.FC = () => {
  return (
    <div className="App">
      <div className="relative">
        <Hero />
        <Menu />
        <Section
          titleContent="About Me"
          descContent="This is the About section description"
        />
        <Section
          titleContent="Projects"
          descContent="This is the Projects section description"
        />
        <Section
          titleContent="Contact"
          descContent="This is the Contact section description"
        />
      </div>
    </div>
  );
};

/* import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="border-4 border-sky-500 rounded-xl p-5">
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
 */
export default App;
