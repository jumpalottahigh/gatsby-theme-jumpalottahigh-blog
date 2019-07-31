import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import useWindowSize from '../hooks/use-windowsize'
import useSortedMarkdown from '../hooks/use-sortedmarkdown'

const activeStyle = {
  color: '#0057e7',
  fontWeight: 600,
  fontSize: '0.95rem',
}

const StyledSidebar = styled.aside`
  padding-top: 3.5rem;

  a {
    color: #0175d8;
    text-decoration: none;
    box-shadow: none;
  }

  a:hover {
    color: #0175d8;
    box-shadow: none;
  }
`

const SideBar = () => {
  const windowSize = useWindowSize()
  const sortedByCategory = useSortedMarkdown()
  const allCategories = Object.keys(sortedByCategory)

  // Only render the Sidebar in non mobile resolutions
  return windowSize.width < 768 ? null : (
    <StyledSidebar className="sidebar-wrapper">
      <div className="sidebar">
        <ul className="sidenav">
          {/* For each category... */}
          {allCategories.map(category => (
            <React.Fragment key={category}>
              <li>
                {/* TODO: need proper link sanitation */}
                <Link
                  to={`/?category=${category.replace(' ', '+')}`}
                  className="sidenav-category"
                  aria-label={category}
                >
                  <em>{category}</em>
                </Link>
              </li>
              {sortedByCategory[category].map(page => (
                <li key={page.node.id}>
                  <Link
                    to={page.node.frontmatter.path}
                    activeStyle={activeStyle}
                    aria-label={page.node.frontmatter.title}
                  >
                    {page.node.frontmatter.title}
                  </Link>
                </li>
              ))}
            </React.Fragment>
          ))}
        </ul>
      </div>
    </StyledSidebar>
  )
}

export default SideBar
