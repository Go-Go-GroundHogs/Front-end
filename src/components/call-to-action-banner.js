import { Col, Row } from "react-bootstrap"
import React from "react"

const CallToActionBanner = ({ id, className, text, cta, ctaFirst, children }) => {

  return (
    <Row id={id} className={`align-items-center justify-content-center mx-auto w-100 ${className || ''}`}>
      <Col className="my-4 text-center" lg={8} md={6} sm={6} xs={10}>{text}</Col>
      <Col className="mb-4 mt-sm-4 text-center" lg={4} md={5} sm={5} xs={10}>{cta}</Col>
    </Row>
  )
}

export default CallToActionBanner;
