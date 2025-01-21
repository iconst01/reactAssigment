import React, { Component } from 'react';
import "./App.css"

class AppEasy extends Component {
    constructor (props) {
            super (props);
            this.state = {
                person :{ } 
            };
        }
        render (){
            return(
                <div>
                    <h1> My Infor</h1>
                    <p> Name:{this.state.person.name || 'N/A'} </p>
                    <p>Phone: {this.state.person.phone || 'N/A'}</p>
                    <p>DOB: {this.state.person.dob || 'N/A'} </p>
                </div>
            );
        }
    }

    export default AppEasy;