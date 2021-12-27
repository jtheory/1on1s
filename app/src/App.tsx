import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Title, tiny intro text, and an image (talking heads?); then the categories
        </p>
        <div>
        <ul>
          <li>Inside each category: hooks/questions/triggers/seeds?</li>
          <li>By default: show all categories (headers) and the topics under that...</li>
          <li>Each in a component that has a ...shrunk mode?
            what's our flow? Nothing fancy for scroll, etc.; but content we're not using can hide.
          </li>
          <li>User flow: scan cats &amp; topics. Pick a topic, click it.
            Go from Scan mode to Read mode: other cats show just the cat name, small.
            SELECTED cat is a heading with selected topic open and other topics small but visible
            Select one topic at a time (it close the other open one when you do)
          </li>
          <li>Click any other cat to go back to Scan mode (all cats + topics visible, no topic open</li>
          <li>Data structure: cat, name, topics, topic, name, MD content?</li>
        </ul>
        </div>
        <p>Next up</p>
<div>
        <ol>
          <li>Write out a few sample categories and triggers</li>
          <li>Basic HTML layout (no state yet, etc)</li>
          <li>Try loading data from json and/or MD?</li>
        </ol>
        </div>
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

export default App;
