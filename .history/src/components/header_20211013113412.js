import React, { Component } from 'react'
import profileimage from '../images/pic1.png'
import style from '../styles/style.css'
import Availability from './availability'


export class Header extends Component {
    render() {
        return (
            <div>
            <div className='profileinfo'>
                <img src={profileimage} className='profilepic' />
                <div className='drinfo'>
                    <a href="#">Dr. John Doe</a>
                    <p style={{fontSize:'14px'}}>Speciality:</p>
                </div>
            </div>
            <Ava
            </div>
            
        )
    }
}

export default Header