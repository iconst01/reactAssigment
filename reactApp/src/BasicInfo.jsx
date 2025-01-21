import React, { Component } from 'react';

class BasicInfo extends Component{
    render(){
        const{ person } = this.props;
        return(
            <div>
                <p> Name: { person.name} </p>
                <p> Phone: {person.phone } </p>
                <p> DOB: { person.dob} </p>
            </div>
        );
    }
}

export default BasicInfo;
