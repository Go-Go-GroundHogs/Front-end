import { Nav, Navbar } from "react-bootstrap"
import React from "react"
import styled from "@emotion/styled"

const NavBar = () => {
  const Logo = styled.div`
    /* height: 70px; */
    display: none;

    h1 {
      color: green;
    }

    @media(max-width:768px) {
      display: block !important;
    }
  `;

  const UpperLink = styled(Nav.Link)`
    font-weight: 500;
    text-transform: uppercase;
    white-space: nowrap;
  `;

  const DarkBar = styled(Navbar)`
    background-color: rgba(85, 150, 206, .7);
    display: flex;
    justify-content: flex-end;
    min-height: 100px;

    @media(min-width: 991px) {
      justify-content: center;
    }
  `;

  const NavLinkArea = styled(Navbar.Collapse)`
    width: 80%;

    @media(min-width: 991px) {
      position: fixed;
    }
  `

  return (
    <DarkBar className="px-3 p-xl-0" collapseOnSelect fixed="top" expand="lg" variant="dark">
        <Navbar.Brand href="/" className="d-contents py-0" style={{flex: 1}}>
          <Logo className="" alt="Logo"><h1>Gogo<br />Groundhogs</h1></Logo>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <NavLinkArea className="justify-content-between" id="responsive-navbar-nav">
          <Nav id="home-nav">
            <UpperLink href="/#intro">About</UpperLink>
            <UpperLink href="/#benefits">Benefits</UpperLink>
            <UpperLink href="/#roadmap">Roadmap</UpperLink>
          </Nav>
          <Nav id="social-links" className="ml-5">
            <UpperLink href="https://t.me/"><i className="fa fa-telegram" aria-hidden="true"></i></UpperLink>
            <UpperLink href="https://discord.gg/"><i className="fa fa-discord-alt social-icon pr-lg-0"></i></UpperLink>
            <UpperLink href="https://twitter.com/"><i className="fa fa-twitter social-icon pr-lg-0"></i></UpperLink>
          </Nav>
        </NavLinkArea>
    </DarkBar>
  )
}

export default NavBar;
