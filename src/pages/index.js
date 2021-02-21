import React from "react"
import { Link } from "gatsby"

import "../style/global.css"
import usePosts from "../hooks/usePosts"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PostPreview from "../components/post-preview"
import Insta from "../components/insta"
const IndexPage = () => {
  const posts = usePosts()

  return (
    <Layout>
      <SEO title="Eslam - Blog" />
      <h1 className="text-xl font-semibold">Hi people</h1>
      <p className="font-medium py-4">Welcome to my gatsby blog!</p>
      {posts.map(post => (
        <PostPreview key={post.slug} post={post} />
      ))}
      <h2 className="text-2xl my-4 font-bold">Instagram posts</h2>
      <Insta />
      <br />
      <Link to="/page-2/">Go to page 2</Link> <br />
    </Layout>
  )
}

export default IndexPage
