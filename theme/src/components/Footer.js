import React from 'react'
import { Footer as StyledFooter } from 'theme-ui'

const Footer = () => {
  return (
    <StyledFooter>
      <div className="footer__container">
        Copyright &copy; 2017-{new Date().getFullYear()} Georgi Yanev.
        <br />
        Dedicated to Sofi and Anton{' '}
        <span role="img" aria-label="heart">
          ❤️
        </span>
        <br />
        This project is{' '}
        <a
          href="https://github.com/jumpalottahigh/gatsby-theme-jumpalottahigh-blog"
          target="_blank"
          rel="noopener noreferrer"
        >
          open source and available on GitHub
        </a>
        .
      </div>
    </StyledFooter>
  )
}

export default Footer
