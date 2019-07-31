import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import Layout from '../components/Layout'

const Section = styled.section`
  h2 {
    text-align: center;

    span {
      color: #23464c;
    }
  }

  h3 {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 24px 16px;
  }

  h4 {
    text-align: center;
  }

  @media (min-width: 768px) {
    h3 {
      max-width: 320px;
      margin: 1rem auto;
    }
  }
`

const NotFoundPage = () => (
  <Layout>
    <Section>
      <h2 className="article-update-notification">
        <span>
          <span role="img" aria-label="poop emoji">
            💩
          </span>{' '}
          404{' '}
          <span role="img" aria-label="poop emoji">
            💩
          </span>
        </span>
        <br />
        <em>This page has been moved or no longer exists</em>
      </h2>
      <h4>
        <span role="img" aria-label="hand pointing down">
          👇
        </span>{' '}
        Check out all blog posts{' '}
        <span role="img" aria-label="hand pointing down">
          👇
        </span>
      </h4>
      <Link to="/">
        <h3 className="category fpv">Blog Posts</h3>
      </Link>
    </Section>
  </Layout>
)

export default NotFoundPage
