import React from 'react'
import Markdown from 'markdown-to-jsx'
import logo from './logo.svg'
import catsAndTopics from './data/cats-and-topics'
import './App.css'

export interface Topic {
  name: string
  path: string
  md: string
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
        <section key={cat.title}>
          <h2>{cat.title}</h2>
          <ul>
            {cat.topics.map((topic) => (
              <li key={topic.name}>{topic.name}</li>
            ))}
          </ul>
        </section>
      ))}
      <section>
        <h2>try pulling in md content</h2>
        <p>unsure what we can do at build time (convert to html / jsx); likely better than on the fly!</p>
        <p>may try writing a script to do it build time, then?</p>
        <Markdown>{catsAndTopics[0].topics[0].md}</Markdown>
      </section>
    </div>
  )
}

export default App
