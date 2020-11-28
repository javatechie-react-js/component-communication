import React, { Component } from 'react'
import Second from './Second'

export default class First extends React.Component {

    constructor() {
        super();
        this.state = {
            "header":"Employee Details",
            "id": 1011,
            "name": "Basant",
            "dept": "SSE"
        }
    }

    render() {
        return (
            <div>
                <Second 
                display_header={this.state.header}
                employee_id={this.state.id}
                employee_name={this.state.name}
                employee_dept={this.state.dept}
                />
            </div>
        );
    }
}