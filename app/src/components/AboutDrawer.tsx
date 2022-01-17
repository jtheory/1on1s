import React from 'react'

interface AboutDrawerProps {
  selectedPath: string
}

const AboutDrawer: React.VFC<AboutDrawerProps> = (props) => {
  const isOpen = '/about' === props.selectedPath
  const drawerClass = isOpen ? 'about drawer open' : 'about drawer closed'

  return (
    <div className={drawerClass}>
      <p>
        <b>Let's compare notes</b>
      </p>
      <p>
        Hi! I'm <a href="https://robwhelan.com">Rob</a>. I built this little site to share my scripts with other folks managing engineers.
        There are many ways to do it; here's mine (and if you're feeling lost, this may help).
      </p>
      <p>
        <em>Contribute:</em> It's open source; <a href="https://github.com/jtheory/1on1s/issues">create an issue</a> to request a new topic,
        or suggest tweaks with the edit link by each article. Thanks!
      </p>
      <p>
        <em>Printing &amp; sharing:</em> Articles are all bookmark-friendly. Printing (to PDF, if you like) works well for a single article,
        or all articles (if none is open), or (secret hack!) snip off the open topic from the URL to print an entire category.
      </p>
      <p>A bit of history:</p>
      <ul>
        <li>My first role managing people was as a startup CTO. I thought I could figure it out with some empathy &amp; people skills.</li>
        <li>I was very wrong. I made a lot of mistakes, and finally started reading a ton &amp; seeking advice.</li>
        <li>I'm a serious introvert, and I already had a habit of mapping out tricky conversations in advance.</li>
        <li>
          All the research + scripting conversations in advance... eventually helped me break through to <em>finally</em> feeling like I
          could do these well and support people well.
        </li>
        <li>
          If I could go back in time: I still would have struggled to learn fast enough. This site is a shortcut to good 1-on-1s, while
          you're still figuring out your own style.
        </li>
      </ul>
      <p>
        <i>Photo credit: me — where I go walking to think</i>
      </p>
    </div>
  )
}

export default AboutDrawer
