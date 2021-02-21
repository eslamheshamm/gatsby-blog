import React from "react"
import PropTypes from "prop-types"
import useSiteMetadata from "../hooks/useSiteMetadata"
import Header from "./header"

const Layout = ({ children }) => {
  const { title } = useSiteMetadata()

  return (
    <>
      <Header siteTitle={title || `Title`} />
      <body className="font-mono relative">
        <main className="w-9/12 md:w-8/12 lg:w-7/12 mx-auto">{children}</main>
        <footer className="w-11/12 mx-auto my-4 ">
          <div className="fixed bottom-0 block ">
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.com">Gatsby</a> | By {"   "}
            <a
              href="https://github.com/eslamheshamm"
              className="underline font-bold"
            >
              Eslam
            </a>
          </div>
        </footer>
      </body>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
