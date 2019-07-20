import React from 'react'

import github from '../../static/github.svg'
import twitter from '../../static/twitter.svg'
import linkedIn from '../../static/linkedin.svg'
import rss from '../../static/rss.svg'

// TODO: props to be configurable; maybe data in gatsby config
const SocialIcons = () => (
  <ul className="nav social">
    <li>
      <a
        href="https://github.com/jumpalottahigh"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={github} alt="Github" />
      </a>
    </li>
    <li>
      <a
        href="https://twitter.com/jumpalottahigh"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={twitter} alt="Twitter" />
      </a>
    </li>
    <li>
      <a
        href="https://www.linkedin.com/in/yanevgeorgi/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={linkedIn} alt="LinkedIn" />
      </a>
    </li>
    <li>
      <a href="/feed.xml">
        <img src={rss} alt="RSS" />
      </a>
    </li>
  </ul>
)

export default SocialIcons
