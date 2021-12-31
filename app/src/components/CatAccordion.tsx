import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Cat } from '../App'
import TopicItem from './TopicItem'
// import './CatAccordion.css'

interface CatAccordionProps {
  data: Cat[]
  selectedCat?: string
  selectedTopic?: string
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
    // do we even need useEffect and useState?
    // eh, animate first
    setSelectedPath(location.pathname)
  }, [location])

  return (
    <section className="CatAccordion">
      {props.data.map((cat) => {
        const isCatActive = selectedPath === '/' || selectedPath.startsWith(`/${cat.slug}/`)
        return (
          <section key={cat.slug}>
            <h2>{cat.title}</h2>
            {isCatActive && (
              <ul>
                {cat.topics.map((topic) => (
                  <TopicItem data={topic} selectedPath={selectedPath} />
                ))}
              </ul>
            )}
          </section>
        )
      })}
    </section>
  )
}

export default CatAccordion
