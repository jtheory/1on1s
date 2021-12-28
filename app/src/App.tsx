import React from 'react'
import logo from './logo.svg'
import catsAndTopics from './data/cats-and-topics'
import './App.css'

export interface Topic {
  name: string
  path: string
}

export interface Cat {
  title: string
  topics: Topic[]
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>1-on-1 ideas &amp; scripts</h1>
        <div>
          <p>It's nearly time for that 1-on-1! Let's plan it out.</p>
        </div>
        <img src={logo} className="App-logo" alt="logo" />
        <p>Title, tiny intro text, and an image (talking heads?); then the categories</p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Laern Raect
        </a>
      </header>
      {catsAndTopics.map((cat) => (
        <section>
          <h2>{cat.title}</h2>
          <ul>
            {cat.topics.map((topic) => (
              <li>{topic.name}</li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  )
}

export default App
