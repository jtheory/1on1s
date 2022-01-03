import React, { CSSProperties } from 'react'
import Markdown from 'markdown-to-jsx'
import { Topic } from '../App'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComments, faPencilAlt } from '@fortawesome/free-solid-svg-icons'

const editUrlBase = 'https://github.com/jtheory/1on1s/tree/main/app/src/content/cats'

interface TopicItemProps {
  data: Topic
  selectedPath: string
}

const TopicStyle: CSSProperties = {
  maxHeight: '4rem', // show only the title
  overflow: 'hidden',
  transition: 'max-height 1s ease-in-out',
}

const TopicStyleSelected = {
  ...TopicStyle,
  maxHeight: '1000rem', // show all
}

const TopicItem: React.VFC<TopicItemProps> = (props) => {
  const isSelected = props.data.path === props.selectedPath
  const topicStyle = isSelected ? TopicStyleSelected : TopicStyle
  const nameLink = isSelected ? '/' : props.data.path
  return (
    <article style={topicStyle}>
      <h1>
        <Link to={nameLink} className="topicLink">
          <FontAwesomeIcon icon={faComments} /> {props.data.name}
        </Link>
      </h1>
      <div>
        <a href={`${editUrlBase}${props.data.path}.md`} aria-label="Edit: opens content page on github">
          <FontAwesomeIcon icon={faPencilAlt} />
        </a>
        <Markdown>{props.data.md}</Markdown>
      </div>
    </article>
  )
}

export default TopicItem
