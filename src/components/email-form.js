import { Button, Col, Form, Row } from "react-bootstrap"
import React from "react"
import {useState} from 'react'

const GOOGLE_SHEETS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbz_RVnd3CADntin3A57uogEtYluv_TSgB5JTKkFzhCHW82VzT61DV0Ju8x4I0zdvbgZ/exec"

const EmailForm = ({ id, hideLabel, children }) => {
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit =  (event) => {
    event.preventDefault();

    setLoading(true)
    const emailUrlStr = `?email=${encodeURIComponent(email)}`

    const resp = fetch(`${GOOGLE_SHEETS_SCRIPT_URL}${emailUrlStr}`, {
      method: 'GET'
    }).then(res => { return res.json() })
      .then(res => { console.log(res); setLoading(false) })
      .catch(err => console.log(err))
  }

  const arrow = () => <><span>&rarr;</span></>
  const dots = () => <><span className="brand-pink">. . .</span></>

  return (
    <Form id={id} onSubmit={handleSubmit}>
      <Form.Group className="mb-3 text-lg-left" controlId="formBasicEmail">
        {
          hideLabel || <Form.Label>GET THE LATEST</Form.Label>
        }
        <Row className="pt-3">
          <Col className="text-start">
            <Form.Control className="d-inline-block w-75" type="email" placeholder="Email Address" onChange={e => setEmail(e.target.value)} />
            <Button className={(loading ? "disabled" : "") + " bg-dark p-2 w-30"} variant="primary" type="submit" disabled={!!loading}>
              { loading ? dots() : arrow() }
            </Button>
          </Col>
        </Row>
        <Form.Text className={(loading ? 'brand-pink' : 'text-muted') + ' d-flex'}>
          { loading ? "Submitting..." : "We keep your email private." }
        </Form.Text>
      </Form.Group>
    </Form>
  )
}

export default EmailForm;
