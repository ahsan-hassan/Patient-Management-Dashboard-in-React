import React from 'react'
import Reqno from '../dashboardcomponents/Reqno'

export default function patients() {
    return (
        <div>
            <Row>
                <Col>
                <Reqno />
                </Col>
                <Col>
                <Reqno />
                </Col>
                <Col>
                <Reqno />
                </Col>
            </Row>
        </div>
    )
}
