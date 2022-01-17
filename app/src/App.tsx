import React, { useEffect, useState } from 'react'
import contentJson from './__generated__/content.json'
import { useLocation } from 'react-router-dom'
import './App.css'
import CatAccordion from './components/CatAccordion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSeedling } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import AboutDrawer from './components/AboutDrawer'

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
  const location = useLocation()
  const [selectedPath, setSelectedPath] = useState(location.pathname)

  useEffect(() => {
    // ALT: setSelectedPath on click, don't wait for location to trigger the change
    // we could even skip this useEffect entirely; just let location be the initial state...? this is nice & clean though
    setSelectedPath(location.pathname)
  }, [location])
  const aboutLink = selectedPath === '/about' ? '/' : '/about'

  return (
    <div className="App">
      <header>
        <h1>Tech 1-on-1 ideas &amp; scripts</h1>
        <p>Nearly time for that 1-on-1! Let's plan it out.</p>
      </header>
      <div className="content">
        <p>Goal: help technical managers &amp; leaders run great 1-on-1s.</p>
        <p>Or: give everyone else a peek into what they may be thinking.</p>
        <p>
          <FontAwesomeIcon icon={faSeedling} /> &nbsp; Pick a category to explore, or <Link to={aboutLink}>read more about this project</Link>.
        </p>
        <AboutDrawer selectedPath={selectedPath} />
        <CatAccordion data={catsData} selectedPath={selectedPath} />
      </div>
    </div>
  )
}

export default App
