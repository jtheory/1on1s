import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Cat } from '../App'
import TopicItem from './TopicItem'

interface CatAccordionProps {
  data: Cat[]
  selectedCat?: string
  selectedTopic?: string
}

const CatAccordion: React.VFC<CatAccordionProps> = (props) => {
  // State... each cat has an expanded state, default true (title + all topics, else just quieter title)
  //   clicking any UNexpanded cat resets both selected cat + topic and sets all cats to expanded
  //   SKIPPING cat state for now! the animations don't interact well.

  // Topic also has expanded state, default false. Show full content (includes title in h1), else just title
  //   clicking an UNexpanded topic collapses old selected and selects new

  const location = useLocation()
  const [selectedPath, setSelectedPath] = useState(location.pathname)

  useEffect(() => {
    // ALT: setSelectedPath on click, don't wait for location to trigger the change
    // we could even skip this useEffect entirely; just let location be the initial state...? this is nice & clean though
    setSelectedPath(location.pathname)
  }, [location])

  return (
    <div className="CatAccordion">
      {props.data.map((cat) => {
        let catClass = 'inactiveCat'
        if (selectedPath === '/' || selectedPath === `/${cat.slug}`) catClass = 'readyCat'
        if (selectedPath.startsWith(`/${cat.slug}/`)) catClass = 'activeCat'

        return (
          <section key={cat.slug} className={catClass}>
            <h1 className="catTitle">{cat.title}</h1>
            <div>
              {cat.topics.map((topic) => (
                <TopicItem key={topic.path} data={topic} selectedPath={selectedPath} />
              ))}
            </div>
          </section>
        )
      })}
    </div>
  )
}

export default CatAccordion
