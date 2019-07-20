import React from 'react'
import styled from '@emotion/styled'
import { Header as StyledHeader } from 'theme-ui'
import { graphql, Link, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import Hamburger from './Hamburger'
import SocialIcons from './SocialIcons'

const ExtendedStyledHeader = styled(StyledHeader)`
  display: flex;
  width: 100%;
  position: fixed;
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12);
  height: 3.5rem;
  z-index: 3;
  left: 0;
  right: 0;

  h1 {
    display: flex;
    align-items: center;
    margin: 0;
    font-size: 1rem;
  }

  a {
    color: #0275d8;
    text-decoration: none;
    margin-right: 0.7rem;
  }

  .header-container {
    margin: 0 auto;
    padding-left: 1.05rem;
    padding-right: 1.05rem;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  .logo {
    height: 56px;
    width: 56px;
    margin-bottom: 0;
    margin-right: 0.5rem;
  }
`

const AppBarWrapper = styled.div`
  display: flex;

  ul li {
    display: none;
  }

  .visible-xs {
    display: inline-block;
  }

  @media (min-width: 710px) {
    ul li {
      display: inline-block;
    }
  }
`

const activeStyle = {
  color: '#0175d8', // TODO:
}

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      logo: allFile(filter: { relativePath: { regex: "/^logo/" } }) {
        edges {
          node {
            name
            childImageSharp {
              fluid(maxWidth: 56, quality: 75) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
        }
      }
    }
  `)

  return (
    <ExtendedStyledHeader>
      <div className="header-container">
        <Link to="/">
          <h1>
            <Img
              className="logo"
              fluid={data.logo.edges[0].node.childImageSharp.fluid}
              alt="Georgi's Blog"
            />
          </h1>
        </Link>

        <AppBarWrapper>
          <ul className="nav">
            <li>
              <Link exact="true" to="/" activeStyle={activeStyle}>
                Home
              </Link>
            </li>
            <li className="visible-xs">
              <Link to="/posts/" activeStyle={activeStyle}>
                Blog posts
              </Link>
            </li>
            <li>
              <Link to="/about/" activeStyle={activeStyle}>
                About
              </Link>
            </li>
          </ul>
          <SocialIcons />
          <Hamburger />
        </AppBarWrapper>
      </div>
    </ExtendedStyledHeader>
  )
}

export default Header
