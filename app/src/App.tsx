import React from 'react'
import Markdown from 'markdown-to-jsx'
import logo from './logo.svg'
import contentJson from './__generated__/content.json'
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

const catsData = contentJson as Cat[]

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
      {catsData.map((cat) => (
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
        <p>MD to JSON to page is working! cool. Next: styling and work on UI; refactoring</p>
        <p>First: showing all content expanded, and set up expand/hide next?</p>
        <p>
          ALSO don't forget URLs: when we DO have expanded topics, the cat + topic should go into a URL anchor, and (when loading the page)
          we can auto-expand the right cat/topic
        </p>
        <h3>Here's some markdown content from the first topic:</h3>
        <Markdown>{catsData[0].topics[0].md}</Markdown>
      </section>
    </div>
  )
}

export default App
