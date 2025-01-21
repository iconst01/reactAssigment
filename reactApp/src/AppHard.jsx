import React, { Component } from 'react';
import './App.css';
import BasicInfo from './BasicInfo';

class AppHard extends Component{
    constructor (props){
        super (props);
        this.state = {
            people:[ 
                {name: 'Itaty Constante', phone:'704-605-4600', dob: '03/22/1998'},
                {name:'Issac Lopez', phone: '704-606-4600', dob: '07-08-15'},
                {name:'Matthew Lopez', phone:'704-605-4611', dob: '01-07-18'}
            ]
        };
    }
    render() {
        return(
            <div>
            <h1>People's Info </h1>
            {this.state.people.map((person, index)=> (
                <BasicInfo key={index} person={person} />
            ))}
        </div>
        );
    }
} 

    export default AppHard;