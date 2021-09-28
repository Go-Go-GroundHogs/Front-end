import { Helmet } from "react-helmet"

import Container from "react-bootstrap/Container"
import Footer from "./footer"
import Header from "./header"
import React from "react"

const Layout = ({ title, children }) => {
  const styles = {
    background: "linear-gradient(180deg,#f2f9f8,#e4be78)"
  };

  return (
    <div style={styles}>
      <Container fluid className="px-0 theme-light app-container w-100">
        <Helmet>
          <title>{title}</title>
        </Helmet>
        <Header />
        <main role={"main"} style={{height: "auto", width: "100%"}}>
          {children}
        </main>
        <Footer />
      </Container>
    </div>
  )
}

export default Layout;
