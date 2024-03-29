import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/Layout'
import FeedbackSection from '../components/FeedbackSection'
import RelatedArticles from '../components/RelatedArticles'
import SupportSection from '../components/SupportSection'
import Share from '../components/Share'
import ReadProgressLine from '../components/ReadProgressLine'
import TinyLetterSignup from '../components/TinyLetterSignUp'
import AskAQuestion from '../components/AskAQuestion'

class BlogPostTemplate extends React.Component {
  render() {
    const { post } = this.props.data

    // If post doesn't have a defined og image, fall back to default defined here
    const ogImage =
      post.frontmatter.ogImage !== null
        ? `https://blog.georgi-yanev.com${post.frontmatter.ogImage.publicURL}`
        : `https://blog.georgi-yanev.com/default-ogimage.png`

    const timeToReadEmoji = '⌛'.repeat(Math.ceil(post.timeToRead / 5))

    return (
      <Layout location={this.props.location}>
        <Helmet
          title={`${post.frontmatter.title} - Georgi Yanev`}
          meta={[
            {
              name: 'description',
              content: `${post.frontmatter.ogDescription}`,
            },
            { name: 'keywords', content: `${post.frontmatter.ogKeywords}` },
            { property: 'og:type', content: 'website' },
            {
              property: 'og:url',
              content: `https://blog.georgi-yanev.com${post.frontmatter.path}`,
            },
            {
              property: 'og:image',
              content: ogImage,
            },
            {
              property: 'og:title',
              content: `${post.frontmatter.title} | Georgi Yanev`,
            },
            {
              property: 'og:description',
              content: `${post.frontmatter.ogDescription}`,
            },
            {
              name: 'twitter:card',
              content: 'summary',
            },
            {
              name: 'twitter:site',
              content: '@jumpalottahigh',
            },
            {
              name: 'twitter:image',
              content: ogImage,
            },
            {
              name: 'twitter:creator',
              content: '@jumpalottahigh',
            },
            {
              name: 'twitter:title',
              content: `${post.frontmatter.title} | Georgi Yanev`,
            },
            {
              name: 'twitter:description',
              content: `${post.frontmatter.ogDescription}`,
            },
          ]}
        >
          {/* Google Structured Data */}
          <script type="application/ld+json">{`
          {
            "@context": "http://schema.org",
            "@type": "NewsArticle",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://blog.georgi-yanev.com${post.frontmatter.path}"
            },
            "headline": "${post.frontmatter.title}",
            "name": "${post.frontmatter.title}",
            "author": {
              "@type": "Person",
              "name": "${post.frontmatter.author}"
            },
            "datePublished": "${post.frontmatter.dateUnformatted}",
            "dateModified": "${post.frontmatter.dateUnformatted}",
            "image": [
              "${ogImage}",
              "${ogImage}",
              "${ogImage}"
            ],
            "publisher": {
              "@type": "Organization",
              "name": "Georgi's Blog",
              "logo": {
                "@type": "ImageObject",
                "url": "https://blog.georgi-yanev.com/default-ogimage.png"
              }
            },
            "description": "${post.excerpt}",
            "articleSection": "${post.excerpt}",
            "url": "https://blog.georgi-yanev.com${post.frontmatter.path}"
          }
        `}</script>
        </Helmet>
        <div className="blog-post-container">
          <div className="blog-post">
            <ReadProgressLine />
            <h1>{post.frontmatter.title}</h1>
            <div className="disclaimer-container">
              <div>
                <div className="disclaimer">
                  <a
                    href={
                      post.frontmatter.category === 'fpv'
                        ? 'https://www.youtube.com/channel/UC2gwYMcfb0Oz_fl9W1uTV2Q'
                        : 'https://twitter.com/jumpalottahigh'
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <strong>{post.frontmatter.author}</strong>
                  </a>
                </div>
                <div className="year">
                  <strong>
                    {post.frontmatter.date} •{' '}
                    {`${timeToReadEmoji} ${post.timeToRead} min read`}
                  </strong>
                </div>
                {post.frontmatter.updated && (
                  <div className="year">
                    <em>Last updated: {post.frontmatter.updated}</em>
                  </div>
                )}
              </div>
            </div>
            <div
              className="blog-post-content"
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
            <FeedbackSection />
            <AskAQuestion />
            <RelatedArticles
              currentPagePath={post.frontmatter.path}
              relatedArticles={post.frontmatter.tags}
            />
            <SupportSection affiliateNote={post.frontmatter.affiliate} />

            <Share url={post.frontmatter.path} />
            <TinyLetterSignup />
          </div>
        </div>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    post: markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      excerpt
      timeToRead
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        updated(formatString: "MMMM DD, YYYY")
        dateUnformatted: date
        path
        title
        category
        tags
        author
        ogKeywords
        ogDescription
        ogImage {
          publicURL
        }
      }
    }
  }
`
