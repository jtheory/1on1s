import React from 'react'
// import logo from './logo.svg'
// import forest from './forest.svg'
import contentJson from './__generated__/content.json'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import CatAccordion from './components/CatAccordion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandSparkles } from '@fortawesome/free-solid-svg-icons'

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

// const AppStyle: CSSProperties = {
//   minHeight: '100%',
//   backgroundRepeat: 'no-repeat',
//   backgroundPosition: 'center',
//   backgroundAttachment: 'fixed',
//   backgroundSize: 'cover',
//   backgroundImage: `url(${forest})`,
// }

const catsData = contentJson as Cat[]

function App() {
  return (
    <div className="App">
      <header>
        <h1>Tech 1-on-1 ideas &amp; scripts</h1>
        <p>Nearly time for that 1-on-1! Let's plan it out.</p>
      </header>
      <div className="content">
        <p>
          Pick a category to explore <FontAwesomeIcon icon={faHandSparkles} style={{ color: '#aaf' }} />
        </p>
        <BrowserRouter>
          <CatAccordion data={catsData} />
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App
