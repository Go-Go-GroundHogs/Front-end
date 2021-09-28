import { Helmet } from "react-helmet"
import NavBar from "./nav-bar"
import React from "react"

const Header = ({ children }) => {
  return (
    <>
      <Helmet>
        <link rel="stylesheet" href="https://use.typekit.net/ydg6cnn.css" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/fork-awesome@1.1.7/css/fork-awesome.min.css" integrity="sha256-gsmEoJAws/Kd3CjuOQzLie5Q3yshhvmo7YNtBG7aaEY=" crossOrigin="anonymous" />
      </Helmet>
      <NavBar>Navigation</NavBar>
    </>
  )
}

export default Header;
