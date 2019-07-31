/* eslint-disable */
import React from 'react'
import { navigate, Link } from 'gatsby'
import Img from 'gatsby-image'
import { FaChevronRight } from 'react-icons/fa'
import useAllMarkdown from '../hooks/use-allmarkdown'
import useSortedMarkdown from '../hooks/use-sortedmarkdown'

// TODO: Figure those out
const ALL_DESCRIPTION = {
  all: 'All the things...',
  fpv: 'Articles about building and flying FPV racing drones...',
  projects: 'Write ups on some small oddball side projects.',
  learning: 'Tips, mentoring, year-in-review, talks and goals.',
  smarthome: 'Exactly how it sounds...',
  stories: 'Personal short stories with a meaning.',
}

const Post = ({
  post,
  showChevron,
  showImage,
  handleTagClick,
  handleCategoryClick,
}) => {
  // Posts are considered fresh if published within the last 31 days
  const freshDuration = 60 * 60 * 24 * 31 * 1000 // 1 month
  const now = Date.now()
  const postDate = new Date(post.node.frontmatter.date).getTime()

  const isFresh = postDate + freshDuration > now

  return (
    <li className="post-preview">
      <Link
        to={post.node.frontmatter.path + '/'}
        aria-label={post.node.frontmatter.title}
      >
        <h2>
          {isFresh && '🆕 '}
          {post.node.frontmatter.title}
        </h2>
        <div className="post-preview-content">
          {showImage === 'yes' || showImage === 'hover' ? (
            <div
              className={`post-preview-image ${showImage === 'hover' &&
                'hover'}`}
            >
              {post.node.frontmatter.ogImage !== null ? (
                <Img
                  fluid={post.node.frontmatter.ogImage.childImageSharp.fluid}
                  alt={post.node.frontmatter.title}
                />
              ) : (
                <img
                  src="/default-ogimage.png"
                  alt={post.node.frontmatter.title}
                />
              )}
            </div>
          ) : null}
          <p
            className={
              showImage === 'yes' || showImage === 'hover'
                ? 'post-preview-excerpt'
                : ''
            }
          >
            {post.node.excerpt}
          </p>
        </div>
      </Link>
      <div className="post-preview-note">
        <div>
          <strong>{post.node.timeToRead} min</strong> read by{' '}
          {post.node.frontmatter.author} on{' '}
          <strong>{post.node.frontmatter.date}</strong> in{' '}
          <strong
            className={`post-preview-category category ${
              post.node.frontmatter.category
            }`}
            data-filter={post.node.frontmatter.category}
            onClick={handleCategoryClick}
          >
            {post.node.frontmatter.category}
          </strong>
          {post.node.frontmatter.tags &&
            post.node.frontmatter.tags.length >= 1 && (
              <p
                style={{
                  margin: 0,
                  fontSize: '0.8rem',
                  display: 'flex',
                  flexFlow: 'row wrap',
                }}
              >
                {post.node.frontmatter.tags.map(tag => (
                  <React.Fragment key={post.node.frontmatter.id + tag}>
                    <span
                      onClick={handleTagClick}
                      data-filter={tag}
                      className="post-preview-tag"
                    >
                      {`#${tag}`}
                    </span>
                  </React.Fragment>
                ))}
              </p>
            )}
        </div>
        {showChevron === 'yes' && (
          <Link
            to={post.node.frontmatter.path + '/'}
            aria-label={post.node.frontmatter.title}
          >
            <FaChevronRight />
          </Link>
        )}
      </div>
    </li>
  )
}

const PostsList = ({
  filterCategoriesAndTagsFromURLParams,
  showCategories,
  showChevron,
  showImage,
  showSearch,
  showTags,
}) => {
  const [search, setSearch] = React.useState('')
  const [currentFilter, setCurrentFilter] = React.useState('all')
  const [allPosts, setAllPosts] = React.useState(useAllMarkdown())
  const [postsFilteredByTag, setPostsFilteredByTag] = React.useState([])
  const [allTags, setAllTags] = React.useState({})
  const [renderTags, setRenderTags] = React.useState(false)

  const sortedPagesByCategory = useSortedMarkdown()
  const allCategories = Object.keys(sortedPagesByCategory)

  const createTagList = () => {
    let tagList = {}

    allPosts.forEach(post => {
      // Create a list of all tags and the amount of occurances they have
      let tags = post.node.frontmatter.tags
      for (let tag of tags) {
        if (!tagList[tag]) {
          tagList[tag] = 1
        } else {
          tagList[tag]++
        }
      }
    })

    setAllTags(tagList)
  }

  const filterByTag = tag => {
    let results = []

    results = allPosts.filter(post => {
      if (post.node.frontmatter.tags.includes(tag)) {
        return post
      }
    })

    return results
  }

  const handleCategoryFilterClick = e => {
    // Filter the posts
    setCurrentFilter(e.target.dataset.filter)

    // Update the URL params
    if (filterCategoriesAndTagsFromURLParams == 'yes') {
      // Update the URL to reflect the filtred posts
      let searchParams = new URLSearchParams(
        `category=${e.target.dataset.filter}`
      )
      navigate(`${window.location.pathname}?${searchParams.toString()}`)
    }
  }

  const handleTagClick = e => {
    // Searched for
    let searched = e.target.dataset.filter

    // Filter the posts
    setPostsFilteredByTag(filterByTag(searched))
    setCurrentFilter('byTag')

    // Update the URL params
    if (filterCategoriesAndTagsFromURLParams == 'yes') {
      // Update the URL to reflect the filtred posts
      let searchParams = new URLSearchParams(`tag=${e.target.dataset.filter}`)
      navigate(`${window.location.pathname}?${searchParams.toString()}`)
    }
  }

  const handleKeyDown = e => {
    if (e.keyCode === 27) {
      // reset any query params from the page url
      // TODO: some issues here
      handleSearch()
      navigate(`${window.location.pathname}`)
      setSearch('')
    }
  }

  const handleSearch = e => {
    let value = e && e.target ? e.target.value : search

    if (typeof value === 'undefined') return

    const searchResults = allPosts.filter(post => {
      // Match search in title, excerpt, tags, category or path
      if (
        post.node.frontmatter.title
          .toLowerCase()
          .includes(value.toLowerCase()) ||
        post.node.excerpt.toLowerCase().includes(value.toLowerCase()) ||
        post.node.frontmatter.tags
          .toString()
          .toLowerCase()
          .includes(value.toLowerCase()) ||
        post.node.frontmatter.category
          .toLowerCase()
          .includes(value.toLowerCase()) ||
        post.node.frontmatter.path.toLowerCase().includes(value.toLowerCase())
      ) {
        return post
      } else {
        return null
      }
    })

    setSearch(value)
    setAllPosts(searchResults)
    setCurrentFilter('all')
  }

  const handleURLParamsCategoryAndTag = () => {
    // Grab search params from the URL
    let searchParams = new URLSearchParams(window.location.search)
    // Get category param value
    let category = searchParams.get('category')
    // Get tag param value
    let tag = searchParams.get('tag')

    // Update the state filter with the value of the URL param
    if (category && allCategories.includes(category)) {
      setCurrentFilter(category)
    } else if (tag) {
      setCurrentFilter('byTag')
      setPostsFilteredByTag(filterByTag(tag))
    } else {
      return
    }
  }

  React.useEffect(() => {
    createTagList()

    if (filterCategoriesAndTagsFromURLParams == 'yes') {
      // Read categories from URL params
      handleURLParamsCategoryAndTag()
    }
  }, [])

  return (
    <div>
      {showCategories === 'yes' && (
        <div className="category-container">
          <button
            className={`category all ${
              currentFilter === 'all' ? 'active' : ''
            }`}
            data-filter="all"
            onClick={handleCategoryFilterClick}
          >
            All posts
          </button>
          {/* TODO: fix the styles on the buttons */}
          {allCategories.map(category => (
            <button
              className={`category fpv ${category} ${
                currentFilter === category ? 'active' : ''
              }`}
              data-filter={category}
              onClick={handleCategoryFilterClick}
              key={category}
            >
              {category}
            </button>
          ))}
        </div>
      )}
      {showTags === 'yes' && (
        <div>
          <a
            style={{
              cursor: 'pointer',
              userSelect: 'none',
              lineHeight: '48px',
            }}
            onClick={e => {
              e.preventDefault
              setRenderTags(!renderTags)
            }}
          >
            {renderTags ? 'Select a tag:' : 'Filter by tag'}
          </a>

          {renderTags && (
            <div style={{ display: 'flex', flexFlow: 'row wrap' }}>
              {Object.keys(allTags).map(item => (
                <span
                  key={item}
                  data-filter={item}
                  className="post-preview-tag"
                  style={{
                    whiteSpace: 'nowrap',
                    margin: '0.25rem',
                    wordBreak: 'keep-all',
                    wordSpacing: 'normal',
                  }}
                  onClick={handleTagClick}
                >
                  #{item} ({allTags[item]})
                </span>
              ))}
            </div>
          )}
        </div>
      )}
      {showSearch === 'yes' && (
        <React.Fragment>
          <div style={{ marginTop: '1rem', marginBottom: '1rem' }}>
            <input
              type="text"
              onKeyDown={handleKeyDown}
              onChange={handleSearch}
              value={search}
              placeholder="Search..."
              style={{ width: '100%', maxWidth: '300px' }}
              aria-label="Search"
            />
          </div>
          {/* TODO: Figure this out */}
          {/* <em>{ALL_DESCRIPTION[currentFilter]}</em> */}
        </React.Fragment>
      )}
      {showCategories === 'yes' ||
      showSearch === 'yes' ||
      showTags === 'yes' ? (
        <hr />
      ) : null}
      <ul className="list-none m-t-1">
        {currentFilter === 'all' && allPosts
          ? allPosts.map(post => (
              <Post
                key={post.node.id}
                post={post}
                showChevron={showChevron}
                showImage={showImage}
                handleTagClick={handleTagClick}
                handleCategoryClick={handleCategoryFilterClick}
              />
            ))
          : currentFilter === 'byTag' && postsFilteredByTag
          ? postsFilteredByTag.map(post => (
              <Post
                key={post.node.id}
                post={post}
                showChevron={showChevron}
                showImage={showImage}
                handleTagClick={handleTagClick}
                handleCategoryClick={handleCategoryFilterClick}
              />
            ))
          : sortedPagesByCategory[currentFilter].map(post => (
              <Post
                key={post.node.id}
                post={post}
                showChevron={showChevron}
                showImage={showImage}
                handleTagClick={handleTagClick}
                handleCategoryClick={handleCategoryFilterClick}
              />
            ))}
      </ul>
    </div>
  )
}

export default PostsList

// Example usage:
/* <PostsList
  showChevron="yes|no"
  showImage="yes|hover|no"
  showCategories="yes|no"
  showSearch="yes|no"
  filterCategoriesAndTagsFromURLParams="yes|no"
  posts={posts}
/> */
