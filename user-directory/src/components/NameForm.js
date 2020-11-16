import React from "react";
function NameForm(props) {
    return (
        <div>
            <label htmlFor="form-input">Search Employee By Name:TRY THIS </label>
            <input 
            type="text"
            value={props.filterState}
            onChange={props.onFilterChange}
            name="formInput"
            id="form-input" />
        </div>
    )
}
export default NameForm;