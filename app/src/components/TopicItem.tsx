import React from 'react'
import Markdown from 'markdown-to-jsx'
import { Topic } from '../App'
// import './App.css'

const editUrlBase = 'https://github.com/jtheory/1on1s/tree/main/app/src/content/cats/'

interface TopicItemProps {
  data: Topic
  key: string
}

const TopicItem: React.VFC<TopicItemProps> = (props) => {
  return (
    <li key={props.key}>
      <h2>{props.data.name}</h2>
      <a href={`${editUrlBase}${props.data.path}`} aria-label="Edit: opens content page on github">
        edit
      </a>
      <Markdown>{props.data.md}</Markdown>
    </li>
  )
}

export default TopicItem
