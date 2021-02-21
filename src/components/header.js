import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header className=" mb-4 bg-gray-400 py-8">
    <div className="w-6/12 mx-auto">
      <h1>
        <Link to="/" className="text-2xl text-white font-bold">
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
