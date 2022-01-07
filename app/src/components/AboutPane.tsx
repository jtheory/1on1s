import React, { CSSProperties } from 'react'

interface AboutPaneProps {
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

/**
 * So. Is this all in an icon, and it expands out?
 * Modal? and does it have a URL, or even just a # added/removed?
 * Check how to do modals; I'm guessing absolute layout, but support scrolling for vertical content overflow
 */
const AboutPane: React.VFC<AboutPaneProps> = (props) => {
  const isOpen = '/about' === props.selectedPath
  const drawerStyle = isOpen ? DrawerOpenStyle : DrawerClosedStyle

  return (
    <div>
      <h1>
        Hello; what's this?
        {/* <Link to={nameLink} onClick={scrollToTitle} className="topicLink">
          <FontAwesomeIcon icon={faComments} /> {props.data.name}
        </Link> */}
      </h1>
      <div className="drawer" style={drawerStyle}>
        <p>Some content here.</p>
        <ul>
          <li>What is this - audience (both mgr/lead + ICs)</li>
          <li>who am I, what I do</li>
          <li>contact info</li>
          <li>contributing + improving / comments / typos</li>
          <li>photo credit?</li>
        </ul>
      </div>
    </div>
  )
}

export default AboutPane
