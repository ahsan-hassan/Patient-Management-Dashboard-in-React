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
            <p>2:00 AM</p>
            <p>Today</p>
                </Col>
            </Row>
        </div>
    )
}
