import React from 'react'
import Layout from '../components/Layout'
import PostsList from '../components/PostsList'
import TinyLetterSignup from '../components/TinyLetterSignUp'

const IndexPage = () => (
  <Layout>
    <PostsList
      showChevron="yes"
      showImage="yes"
      showCategories="yes"
      showTags="yes"
      showSearch="yes"
      filterCategoriesAndTagsFromURLParams="yes"
    />
    <TinyLetterSignup />
  </Layout>
)

export default IndexPage
