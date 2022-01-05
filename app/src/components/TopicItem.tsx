import React, { CSSProperties, useRef } from 'react'
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

const DrawerClosedStyle: CSSProperties = {
  // display: 'none',
  maxHeight: '0', // default closed
  opacity: '0',
  overflow: 'hidden',
  transition: 'max-height 1s ease-out, opacity 1s ease-in-out', // cubic-bezier(0, 0.8, 0.5, 1)
}

const DrawerOpenStyle = {
  ...DrawerClosedStyle,
  opacity: '1',
  maxHeight: '500rem', // TODO: too big = animation delay. too small = risk of cropping open content
  transition: 'max-height 1s ease-in, opacity 1s ease-in-out', // cubic-bezier(0.5, 0.8, 1, 0)
}

const TopicItem: React.VFC<TopicItemProps> = (props) => {
  // TODO: eh. more movement, plus this isn't (yet) triggered by a fresh page load
  const titleRef = useRef<HTMLHeadingElement>(null)
  const scrollToTitle = () => {} //titleRef?.current?.scrollIntoView({ behavior: 'smooth' })

  const isSelected = props.data.path === props.selectedPath
  const drawerStyle = isSelected ? DrawerOpenStyle : DrawerClosedStyle
  const nameLink = isSelected ? '/' : props.data.path
  return (
    <article>
      <h1 ref={titleRef}>
        <Link to={nameLink} onClick={scrollToTitle} className="topicLink">
          <FontAwesomeIcon icon={faComments} /> {props.data.name}
        </Link>
      </h1>
      <div className="drawer" style={drawerStyle}>
        <p>
          <a href={`${editUrlBase}${props.data.path}.md`} title="Suggest edits on GitHub" aria-label="Edit link to GitHub">
            <FontAwesomeIcon icon={faPencilAlt} />
          </a>
        </p>
        <Markdown>{props.data.md}</Markdown>
      </div>
    </article>
  )
}

export default TopicItem
