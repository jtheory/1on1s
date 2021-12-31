import React from 'react'
import logo from './logo.svg'
import forest from './forest-transp.svg'
import contentJson from './__generated__/content.json'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import CatAccordion from './components/CatAccordion'

export interface Topic {
  name: string
  path: string
  md: string
}

export interface Cat {
  title: string
  slug: string
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
        <img src={forest} alt="forest" />
        <p>Title, tiny intro text, and an image (from blush?); then the categories</p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Laern You This Tasty Raect
        </a>
      </header>
      <BrowserRouter>
        <h2>Cat accordion</h2>
        <CatAccordion data={catsData} />
      </BrowserRouter>
    </div>
  )
}

export default App
