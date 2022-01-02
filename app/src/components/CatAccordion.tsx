import React, { CSSProperties, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Cat } from '../App'
import TopicItem from './TopicItem'
import { Link } from 'react-router-dom'

interface CatAccordionProps {
  data: Cat[]
  selectedCat?: string
  selectedTopic?: string
}

const CatStyle: CSSProperties = {
  maxHeight: '5rem', // show only the title
  overflow: 'hidden',
  opacity: '0.5',
  transition: 'max-height 1s ease-in-out',
}

const CatStyleSelected = {
  ...CatStyle,
  opacity: '1',
  maxHeight: '1000rem', // show all
}

const CatAccordion: React.VFC<CatAccordionProps> = (props) => {
  // state... each cat has an expanded state, default true (title + all topics, else just quieter title)
  //   clicking any UNexpanded cat resets both selected cat + topic and sets all cats to expanded
  // Topic also has expanded state, default false. Show full content (includes title in h1), else just title
  //   clicking an UNexpanded topic collapses old selected and selects new
  // Thinking... do we set state on each thing, or just re-render when URL changes
  //    and each cat/topic chooses expanded based on selections (in URL)?

  const location = useLocation()
  const [selectedPath, setSelectedPath] = useState(location.pathname)

  useEffect(() => {
    // TODO do we even need useEffect and useState? I think useLocation = it'll re-render when that changes?
    // ALT: setSelectedPath on click, don't wait for nav to trigger the change
    setSelectedPath(location.pathname)
    console.log(`location changed useEffect ${new Date()}`)
  }, [location])

  return (
    <section className="CatAccordion">
      {props.data.map((cat) => {
        const isCatActive = selectedPath === '/' || selectedPath.startsWith(`/${cat.slug}/`)
        const catStyle = isCatActive ? CatStyleSelected : CatStyle
        return (
          <section key={cat.slug} style={catStyle}>
            <h2>
              <Link to={'/'}>{cat.title}</Link>
            </h2>
            <ul>
              {cat.topics.map((topic) => (
                <TopicItem key={topic.path} data={topic} selectedPath={selectedPath} />
              ))}
            </ul>
          </section>
        )
      })}
    </section>
  )
}

export default CatAccordion
