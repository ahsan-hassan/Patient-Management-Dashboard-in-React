import React, { Component } from 'react'
import { Col } from 'react-bootstrap';
import style from '../styles/style.css';
import Earning from './Earning';
import Request from './Requests'

export class Dashboard extends Component {
    render() {
        return (   
            <div>
                <Row>
                    <Col>
                    <Earning />
                    </Col>
                    <Col>
                    </Col>
                </Row>
                <Request />
            </div>
        )
    }
}

export default Dashboard