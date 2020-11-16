import React, { useEffect, useState } from "react";
import './App.css';
import EmployeeTable from "./components/EmployeeTable";
// import employeeData from "./employeeData.json";
import API from "./utils/API"

function App() {

  const [employeeSearch, setEmployeeSearch] = useState([]);

  useEffect(function() {

    API.getEmployeeList()
    .then(res => {
      setEmployeeSearch(res.data.results);
    })
    .catch(err => console.log(err));

  }, []) // this doesn't change

  return (
    <EmployeeTable employees={employeeSearch}/>
  );
}



export default App;
