import React from 'react'
import styled from '@emotion/styled'
import { slide as Menu } from 'react-burger-menu'

import github from '../../static/github.svg'
import twitter from '../../static/twitter.svg'
import linkedIn from '../../static/linkedin.svg'
import rss from '../../static/rss.svg'
import devBadge from '../../static/dev-badge.svg'

const StyledHamburger = styled(Menu)`
  .bm-item {
    display: flex !important;
    align-items: center;
    text-decoration: none;
    margin-bottom: 10px;
    color: #000;
    transition: color 0.2s;
  }

  .bm-item img {
    width: 32px;
    height: 32px;
    margin-right: 1rem;
  }

  /* Change color on hover */
  .bm-item:hover {
    color: #0175d8;
  }

  /* Position and sizing of burger button */
  .bm-burger-button {
    position: fixed;
    width: 36px;
    height: 30px;
    right: 20px;
    top: 16px;
  }

  /* Color/shape of burger icon bars */
  .bm-burger-bars {
    background: #373a47;
  }

  /* Position and sizing of clickable cross button */
  .bm-cross-button {
    width: 32px !important;
    height: 32px !important;
  }

  /* Color/shape of close button cross */
  .bm-cross {
    width: 4px !important;
    height: 26px !important;
    background: #bdc3c7;
  }

  /* General sidebar styles */
  .bm-menu {
    background: #fafafa;
    padding: 2.5em 1.5em 0;
    font-size: 1.15em;
  }

  .bm-menu-wrap {
    top: 0;
  }

  /* Morph shape necessary with bubble or elastic */
  .bm-morph-shape {
    fill: #373a47;
  }

  /* Wrapper for item list */
  .bm-item-list {
    color: #b8b7ad;
  }

  /* Styling of overlay */
  .bm-overlay {
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.3);
  }

  @media (min-width: 700px) {
    .bm-burger-button {
      display: none;
    }
  }

  .bm-overlay,
  .bm-menu-wrap {
    transition-duration: 0.3s !important;
  }
`

const Hamburger = () => (
  <StyledHamburger>
    <Menu right>
      <a
        href="https://github.com/jumpalottahigh"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={github} alt="Github" />
        GitHub
      </a>
      <a
        href="https://twitter.com/jumpalottahigh"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={twitter} alt="Twitter" />
        Twitter
      </a>
      <a
        href="https://www.linkedin.com/in/yanevgeorgi/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={linkedIn} alt="LinkedIn" />
        LinkedIn
      </a>
      <a href="/feed.xml">
        <img src={rss} alt="Subscribe to RSS feed" />
        RSS
      </a>
      <a href="https://dev.to/jumpalottahigh">
        <img
          src={devBadge}
          alt="Georgi Yanev's DEV Profile"
          height="30"
          width="30"
        />
        Dev.to
      </a>
    </Menu>
  </StyledHamburger>
)

export default Hamburger
