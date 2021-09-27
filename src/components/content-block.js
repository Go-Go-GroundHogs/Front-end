import { Col, Row } from "react-bootstrap"
import React from "react"

const ContentBlock = ({ id, className, children }) => {
  return (
    <Row id={id} className="content-block border-bottom py-5">
      <Col>
        {children}
      </Col>
    </Row>
  )
}

export default ContentBlock;
