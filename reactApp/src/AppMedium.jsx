import React, { Component } from 'react';
import './App.css'
import BasicInfo from './BasicInfo';


class AppMedium extends Component{
    constructor (props){
        super (props);
        this.state= {
            person: {
                name: 'Itaty Constante', 
                phone: ' 704-605-4600',
                dob: '03/22/1998'

            }
        };
    }

    render() {
        return (
            <div> 
            <h1>My Info</h1>
            <BasicInfo person={this.state.person}/> 
            </div>
        );
    }
}

export default AppMedium;
 