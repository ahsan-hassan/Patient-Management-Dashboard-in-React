import React, { Component } from 'react';
import {Form, Button , Col , Row } from 'react-bootstrap';

export class OrderSummary extends Component {
    render() {
        return (
            <div>
                <div className="ordersummary">
                <Row className="summary_row">
                <h3 style={{textAlign:'center' , width:'100%', marginTop:'25px'}}>Summary</h3>       
                <Col lg={6} style={{marginTop: '60px'}}>
                <Form className="orderform" >
                    <Form.Group controlId="formBasicEmail" className="form_group">
                        <Form.Label>PickUp Location</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail" className="form_group">
                        <Form.Label>Dropoff Location</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail" className="form_group">
                        <Form.Label>Item Name</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail" className="form_group">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword" className="form_group">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                </Form>
                </Col>
                <Col lg={6}  style={{marginTop: '60px'}}>
                <Form className="orderform">

                    <Form.Group controlId="formBasicEmail" className="form_group">
                    <Form.Text >
                        Pick up Location
                    </Form.Text>
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail" className="form_group">
                        <Form.Label>Contact No</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail" className="form_group">
                    <Form.Text >
                        Dropoff Location
                    </Form.Text>
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword" className="form_group">
                        <Form.Label>Contact No</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    </Form>
                </Col>
                <div>
                <Button variant="primary" type="submit" style={{backgroundColor: 'white', color: '#0660A5', marginBottom: '30px',marginRight: '30px' , width: '130px' }}>
                        Edit
                </Button>
                <Button variant="primary" type="submit" style={{backgroundColor: 'white', color: '#0660A5',marginBottom: '30px', width: '130px'}}>
                        Confirm
                </Button>
                </div>
                </Row>
                </div>
                
            </div>
        )
    }
}

export default OrderSummary
