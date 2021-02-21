import React from "react"

import { Link } from "gatsby"

const PostPreview = ({ post }) => (
  <article className="my-2 border-b  py-2">
    <h2 className="text-2xl font-bold  py-4">
      <Link to={post.slug}>{post.title}</Link>
    </h2>
    <p className="p-2 mb-4">{post.excerpt}</p>
    <Link to={post.slug} className="underline py-4">
      Read this post &rarr;
    </Link>
  </article>
)
export default PostPreview
