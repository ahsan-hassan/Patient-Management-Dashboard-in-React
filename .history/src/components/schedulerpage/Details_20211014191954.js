import React from 'react'
import profileimage from '../images/pic1.png'
import { Row, Col } from 'react-bootstrap'

export default function Details() {
    return (
        <div className="requests">
            <Row>
                <Col>
                <img
              src={profileimage}
              alt=""
              className="appointmentimg"
            />
                </Col>
            </Row>
        </div>
    )
}
