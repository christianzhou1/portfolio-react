import React, { useEffect } from "react";
import Hero from "./components/Hero";
//import Description from "./components/Description";
//import Header from "./components/Header";
import About from "./components/About";
//import Section from "./components/Section";
import Contact from "./components/Contact";
import Menu from "./components/Menu";
import Projects from "./components/Projects";
const App: React.FC = () => {
  return (
    <div className="App">
      <div className="relative">
        <Hero />
        <Menu />
        <About
          titleContent="About Me"
          descContent="Here's some quick info on who I am, what I like, and what I've been up to lately."
        />
        <Projects
          titleContent="Projects"
          descContent="What I created, and what I'm working on."
        />
        <Contact
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
