import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

import { MDXRenderer } from "gatsby-plugin-mdx"
export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        author
      }
      body
    }
  }
`
const PostTemplate = ({ data: { mdx: post } }) => (
  <Layout>
    <SEO title={post.frontmatter.title} />
    <h1 className="font-bold text-2xl my-2">{post.frontmatter.title}</h1>
    <p className="px-1">Author: {post.frontmatter.author}</p>
    <article className="my-4 px-3">
      <MDXRenderer>{post.body}</MDXRenderer>
    </article>
  </Layout>
)
export default PostTemplate
