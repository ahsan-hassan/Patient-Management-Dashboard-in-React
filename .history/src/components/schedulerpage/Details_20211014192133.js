import React from 'react'
import profileimage from '../images/pic1.png'
import { Row, Col } from 'react-bootstrap'

export default function Details() {
    return (
        <div className="detail_profile">
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
