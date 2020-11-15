function compareLastNames(direction = 1) {
    // each employeeRecord's object last name being compared
    return function (employeeRecord1, employeeRecord2) {
        const name1 = `${employeeRecord1.name.last}`
        const name2 = `${employeeRecord2.name.last}`

        let result = 0;
        if (name1 > name2) {
            result = 1;
        } else if (name1 < name2) {
            result = -1;
        }
        return result * direction;
    }
}

export default compareLastNames;
