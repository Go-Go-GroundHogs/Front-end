import { Helmet } from "react-helmet"
import NavBar from "./nav-bar"
import React from "react"

const Header = ({ children }) => {
  return (
    <>
      <Helmet>
        <link rel="stylesheet" href="https://use.typekit.net/ydg6cnn.css" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/fork-awesome@1.1.7/css/fork-awesome.min.css" integrity="sha256-gsmEoJAws/Kd3CjuOQzLie5Q3yshhvmo7YNtBG7aaEY=" crossOrigin="anonymous" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@GoGoGroundhogs" />
        <meta name="twitter:title" content="Gogo Groundhogs" />
        <meta name="twitter:description" content="The Genesis GoGo Groundhogs Collection is a collection of 2,500 unique Non-Fungible Tokens (NFTs) on the Ethereum blockchain." />
        <meta name="twitter:image" content="https://gogogroundhog.com/gogo-twitter.jpg" />
      </Helmet>
      <NavBar>Navigation</NavBar>
    </>
  )
}

export default Header;
