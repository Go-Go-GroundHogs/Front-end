import { Nav, Navbar } from "react-bootstrap"
import React from "react"
import styled from "@emotion/styled"

const NavBar = () => {
  const Logo = styled.img`
    height: 70px;
  `;

  const UpperLink = styled(Nav.Link)`
    font-weight: 500;
    text-transform: uppercase;
    white-space: nowrap;
  `;

  const DarkBar = styled(Navbar)`
    background-color: black;
    min-height: 100px;
  `;

  return (
    <DarkBar className="px-3 p-xl-0" collapseOnSelect expand="lg" variant="dark">
        <Navbar.Brand href="/" className="d-contents py-0">
          <Logo
            src={"harems-logo-250-85s.gif"}
            className=""
            alt="Harems Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
          <Nav id="home-nav">
          <UpperLink href="https://mint.harems.io/">Mint</UpperLink>
            <UpperLink href="https://opensea.io/collection/haremsalphaog">Buy</UpperLink>
            <UpperLink href="/#roadmap">Roadmap</UpperLink>
            <UpperLink href="/#team">Team</UpperLink>
          </Nav>
          <Nav id="social-links" className="ml-5">
            <UpperLink href="https://t.me/haremsglobal"><i className="fa fa-telegram" aria-hidden="true"></i></UpperLink>
            <UpperLink href="https://discord.gg/mMGRJVxf3x"><i className="fa fa-discord-alt social-icon pr-lg-0"></i></UpperLink>
            <UpperLink href="https://twitter.com/haremsnft/"><i className="fa fa-twitter social-icon pr-lg-0"></i></UpperLink>
          </Nav>
        </Navbar.Collapse>
    </DarkBar>
  )
}

export default NavBar;
