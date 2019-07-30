import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import useSortedMarkdown from '../hooks/use-sortedmarkdown'

const activeStyle = {
  color: '#0057e7',
  fontWeight: 600,
  fontSize: '0.95rem',
}

const StyledSidebar = styled.aside`
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
  const sortedByCategory = useSortedMarkdown()
  const allCategories = Object.keys(sortedByCategory)

  console.log(sortedByCategory)
  console.log(allCategories)

  return (
    <StyledSidebar className="sidebar-wrapper">
      <div className="sidebar">
        <ul className="sidenav">
          {/* For each category... */}
          {allCategories.map(category => (
            <React.Fragment key={category}>
              <li>
                <Link
                  to={`/?category=${category}`}
                  className="sidenav-category"
                >
                  <em>{category}</em>
                </Link>
              </li>
              {sortedByCategory[category].map(page => (
                <li key={page.node.id}>
                  <Link
                    to={page.node.frontmatter.path}
                    activeStyle={activeStyle}
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
