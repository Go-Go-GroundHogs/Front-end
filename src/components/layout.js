import { Helmet } from "react-helmet"

import Container from "react-bootstrap/Container"
import Footer from "./footer"
import Header from "./header"
import React from "react"

const Layout = ({ dark, title, children }) => {
  const styles = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black"
  };

  return (
    <div style={styles}>
      <Container fluid className="px-0 theme-light app-container">
        <Helmet>
          <title>{title}</title>
        </Helmet>
        <Header />
        <main role={"main"} style={{height: "auto"}}>
          {children}
        </main>
        <Footer />
      </Container>
    </div>
  )
}

export default Layout;
