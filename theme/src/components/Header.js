import React from 'react'
import styled from '@emotion/styled'
import { Header as StyledHeader } from 'theme-ui'
import { graphql, Link, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

const AppBarWrapper = styled.div`
  display: flex;

  ul {
    padding: 0;
  }

  li {
    margin: 0 0.25rem;
  }

  ul li {
    display: inline-block;
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
    <StyledHeader>
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
                Blog posts
              </Link>
            </li>
            {/* TODO: */}
            {/* <li>
              <Link to="/about/" activeStyle={activeStyle}>
                About
              </Link>
            </li> */}
          </ul>
        </AppBarWrapper>
      </div>
    </StyledHeader>
  )
}

export default Header
