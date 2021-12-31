import React from 'react'
import Markdown from 'markdown-to-jsx'
import { Topic } from '../App'
import { Link } from 'react-router-dom'
// import './App.css'

const editUrlBase = 'https://github.com/jtheory/1on1s/tree/main/app/src/content/cats'

interface TopicItemProps {
  data: Topic
  selectedPath: string
}

const TopicItem: React.VFC<TopicItemProps> = (props) => {
  const isSelected = props.data.path === props.selectedPath
  return (
    <li key={props.data.path}>
      <h2>
        <Link to={props.data.path}>{props.data.name}</Link>
      </h2>
      {isSelected && (
        <div>
          <a href={`${editUrlBase}${props.data.path}.md`} aria-label="Edit: opens content page on github">
            edit
          </a>
          <Markdown>{props.data.md}</Markdown>
        </div>
      )}
    </li>
  )
}

export default TopicItem
