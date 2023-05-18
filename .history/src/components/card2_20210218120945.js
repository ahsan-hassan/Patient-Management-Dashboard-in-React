import React, { Component } from 'react';
import {Card, Button} from 'react-bootstrap';
import { BsPeopleCircle } from 'react-icons/bs';
import {Button , Navbar, Col, Row, Nav, Form, FormControl} from 'react-bootstrap';

export class Card2 extends Component {
    render() {
        return (
            <div>
                
                <Card style={{ width: '21rem' , height: '24rem;' , borderRadius: '25px' , border: '2px solid' , alignContent: 'center'}}>
                <Card.Body>
                <BsPeopleCircle/>
                    <Card.Title>Drive App</Card.Title>
                    <Card.Text>
                        Driver App to Get real-time updates from your operation team, Navigate your destination turn by turn, communicate with the customer and get proof of delivery. <br></br>
                        Driver App to Get real-time updates from your operation team, Navigate your destination turn by turn, communicate with the customer and get proof of delivery.
                    </Card.Text>
                    <Button className="cardbtn">Contact Us</Button>
                </Card.Body>
                </Card>
            </div>
        )
    }
}

export default Card2
