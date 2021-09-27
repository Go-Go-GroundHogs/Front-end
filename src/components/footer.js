import { Col, Container, Row } from "react-bootstrap"
import React from "react"

import EmailForm from "./email-form"

import styled from "@emotion/styled"

const Footer = ({ children }) => {
  const Logo = styled.img`
    max-width: 200px;
  `

  return (
      <Container fluid="sm">
        <Row className="justify-content-end py-4">
          <Col className="center-content text-md-center text-lg-left" lg={4} sm={12}>
            <EmailForm id="footer-email-form" />
          </Col>
          <Col className="center-content text-center" lg={4} sm={12}>
            <Logo src={"harems-logo-250-85s.gif"} alt="Harems logo"/>
          </Col>
          <Col className="center-content text-center" lg={4} sm={12}>
            &#169; Harems.io {new Date().getFullYear()}
          </Col>
        </Row>
      </Container>
  )
}

export default Footer;
