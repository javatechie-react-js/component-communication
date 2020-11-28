import React, { Component } from 'react'

export default class Second extends React.Component {


    render() {
        return (
            <div>
                <h1>
                    <b>{this.props.display_header}</b>
                </h1>
                <p>
                    <label>EmployeeId : </label><b>{this.props.employee_id}</b>
                </p>
                <p>
                    <label>EmployeeName : </label><b>{this.props.employee_name}</b>
                </p>
                <p>
                    <label>EmployeeDept : </label><b>{this.props.employee_dept}</b>
                </p>
            </div>
        );
    }
}