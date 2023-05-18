import React, { Component } from 'react'
import style from '../styles/style.css'
import { Col , Row } from 'react-bootstrap';

export class Summary extends Component {
    render() {
        return (
            <div className='summary'>
                <h4>Summary</h4>
                <Row style={{textAlign:'center'}}>
                    <Col>
                    <p><strong>Attended</strong></p>
                    <h5 style={{border:'1px solid aqua', backgroundColor:'aqua', height:'50px'}}>02</h5>
                    </Col>
                    <Col>
                    <p><strong>Appointments</strong></p>
                    <p>08</p>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Summary