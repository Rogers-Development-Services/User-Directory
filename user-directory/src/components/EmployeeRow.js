import React from "react";

const styles = {
    rowStyle: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around"
    }
};

function EmployeeRow(props) {
    return (
        <tr style={styles.rowStyle}>
            <td><img src={props.employeeRecord.picture.large} alt={props.employeeRecord.name.first + props.employeeRecord.name.last}></img></td>
            <td>{props.employeeRecord.name.first} </td>
            <td>{props.employeeRecord.name.last}</td>
            <td>{props.employeeRecord.phone}</td>
            <td>{props.employeeRecord.email}</td>
            <td>{props.employeeRecord.dob.date.slice(0, 10)}</td>
        </tr>
    )
}

export default EmployeeRow;