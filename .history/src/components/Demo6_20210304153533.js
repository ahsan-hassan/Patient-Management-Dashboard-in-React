import React, { Component } from 'react';
import {Button} from 'react-bootstrap'
import BackButton from './BackButton';

export class Demo6 extends Component {
    render() {
        
        document.getElementById("abc").style.display ="none"; 
        this.testfn = this.testfn.bind(BackButton);
        this.testfn(){
            this.state({
                showComponent: true;
            })
        }
        return (
            <div>
               <Button onClick={BackButton.render("BackButton")}>Back</Button>
            <ul>
                <li><a href="#">Name</a></li>
                <li><a href="#">Email</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
                
            </div>
             
        )
    }
}


export default Demo6
