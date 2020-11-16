import React, { useState, useEffect } from "react";
import EmployeeRow from "./EmployeeRow";
import LastNameSortButton from "./LastNameSortButton";
import FirstNameSortButton from "./FirstNameSortButton";
import NameForm from "./NameForm";
import compareLastNames from "../utils/compareLastNames";
// import API from "../utils/API";
import compareFirstNames from "../utils/compareFirstNames";

const styles = {
    headshotButtonStyle: {
        visibility: "hidden",
        padding: "1.5rem"
    },
    filterButtonsStyle: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around"
    },
};

function EmployeeTable(props) {
    // const [employeeSearch, setEmployeeSearch] = useState("");
    const [filteredEmployees, setFilteredEmployees] = useState(props.employees);
    const [filterState, setFilterState] = useState("");
    const [sortDirection, setSortDirection] = useState(1);

    useEffect(function () {
        // API.getEmployeeList()
        // .then(res => {
        //     this.setState({ employees: res.data.results });
        // })
        // .catch(err => console.log(err));

        let filteredRecords = props.employees;
        if (filterState !== '') {
            filteredRecords = props.employees.filter(employeeRecord => {
                return employeeRecord.name.last.toLowerCase().startsWith(filterState) || employeeRecord.name.first.toLowerCase().startsWith(filterState);
            })
        }

        //sorting by last names
        filteredRecords.sort(compareLastNames(sortDirection));
        setFilteredEmployees(filteredRecords);

        //sorting by first names
        // filteredRecords.sort(compareFirstNames(sortDirection));
        // setFilteredEmployees(filteredRecords);

    }, [props.employees, sortDirection, filterState])

    function onFilterChange(event) {
        const { value } = event.target;
        setFilterState(value);
    };

    function toggleSortDirection(event) {
        event.preventDefault();
        event.stopPropagation();
        setSortDirection(-1 * sortDirection);
    };

    return (
        <div>
            <NameForm filterState={filterState} onFilterChange={onFilterChange} />
            <table>
                <thead>
                    <tr style={styles.filterButtonsStyle}>
                        <td><button style={styles.headshotButtonStyle} name="">Headshot</button></td>
                        {/* <th><FirstNameSortButton toggleSortDirection={toggleSortDirection} /></th> */}
                        <th><LastNameSortButton toggleSortDirection={toggleSortDirection} /></th>
                        <td><button name="phone" onClick={props.handleButtonClick}>Phone</button></td>
                        <td><button name="email" onClick={props.handleButtonClick}>Email</button></td>
                        <td><button name="date-of-birth" onClick={props.handleButtonClick}>D.O.B.</button>
                        </td>
                    </tr>
                </thead>
                <tbody>
                    {
                        filteredEmployees.map(employeeRecord =>
                            (<EmployeeRow
                                employeeRecord={employeeRecord}
                                key={employeeRecord.login.uuid} />))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default EmployeeTable;