import React, { Component } from 'react'
import {Button , Navbar, Col, Row , NavLink , Nav} from 'react-bootstrap';
import './style.css';
import { BsPeopleCircle , BsFillEnvelopeFill } from 'react-icons/bs';
import { TiSocialFacebookCircular ,TiSocialTwitterCircular , TiSocialYoutubeCircular , TiSocialInstagramCircular} from 'react-icons/ti';
import logo from './logo.jpg'

export class footer extends Component {
    render() {
        return (
            <div className="footer">
                <Row className="footer_row">
                <Col lg={6} sm={6}>
                    <img src={logo} className="footer_logo" />
                    <div className="footer_email">
                     <BsFillEnvelopeFill className="profile_icon" />
                     <p>Shipster@gmail.com</p> 
                    </div> 
                </Col>
                <Col lg={6} sm={6}>
                <h3 className="footer_social">
                    Social Media <br></br>
                </h3>     
                <Nav className="social_icons" >
                <Nav.Link>
                    <TiSocialFacebookCircular  className="profile_icon"/>
                  </Nav.Link>  
                  <Nav.Link>
                    <TiSocialInstagramCircular  className="profile_icon"/>
                  </Nav.Link>  
                  <Nav.Link>
                    <TiSocialTwitterCircular   className="profile_icon"/>
                  </Nav.Link>  
                  <Nav.Link>
                    <TiSocialYoutubeCircular  className="profile_icon"/>
                  </Nav.Link>  
                </Nav>                   
                </Col>
                </Row>
            </div>
        )
    }
}

export default footer