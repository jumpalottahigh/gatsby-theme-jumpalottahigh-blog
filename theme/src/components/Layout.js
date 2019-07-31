import React from 'react'
import Helmet from 'react-helmet'
import { css, Global } from '@emotion/core'
import { Layout as StyledLayout, Main, Container } from 'theme-ui'
import { graphql, useStaticQuery } from 'gatsby'
import Header from './Header'
import Footer from './Footer'
import Sidebar from './Sidebar'
import MenuFab from './MenuFab'

import './common.css'
import 'prismjs/themes/prism-okaidia.css'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          metaDescription
          keywords
          ogImage
          ogUrl
          ogTitle
          ogDescription
        }
      }
    }
  `)

  return (
    <StyledLayout>
      <Global
        styles={css`
          body {
            margin: 0;
          }
        `}
      />
      <Helmet
        htmlAttributes={{ lang: 'en' }}
        title={data.site.siteMetadata.title}
        meta={[
          {
            name: 'description',
            content: data.site.siteMetadata.metaDescription,
          },
          {
            name: 'keywords',
            content: data.site.siteMetadata.keywords,
          },
          {
            property: 'og:image',
            content: data.site.siteMetadata.ogImage,
          },
          { property: 'og:type', content: 'website' },
          {
            property: 'og:url',
            content: data.site.siteMetadata.ogUrl,
          },
          {
            property: 'og:title',
            content: data.site.siteMetadata.ogTitle,
          },
          {
            property: 'og:description',
            content: data.site.siteMetadata.ogDescription,
          },
        ]}
      />
      <Header />
      <MenuFab />
      <div className="main-wrapper">
        <Sidebar />
        <Main>
          <Container>{children}</Container>
        </Main>
      </div>
      <Footer />
    </StyledLayout>
  )
}

export default Layout
