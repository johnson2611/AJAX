import { BrainHttp } from "./api/BrainHttp.js";

let serverURL = `http://127.0.0.1:3000/api`;

// Get Button
let getButton = document.querySelector('#get-btn');
getButton.addEventListener('click', function(){
   fetchEmployees();
});

// Fetch Employees
let fetchEmployees = () => {
    let url = `${serverURL}/employees`;
    BrainHttp.get(url).then((data) => {
        let employees = data;
        let employeeRows = ''
        for(let employee of employees){
            employeeRows += `<tr>
                                <td>${employee.id}</td>
                                <td>${employee.first_name}</td>
                                <td>${employee.last_name}</td>
                                <td>${employee.email}</td>
                                <td>${employee.gender}</td>
                                <td>${employee.ip_address}</td>
                            </tr>`
        } 
        document.querySelector('#table-body').innerHTML = employeeRows;
    }).catch((err) => {
        console.error(err)
    });
}

// Post Button
let postButton = document.querySelector('#post-btn');
postButton.addEventListener('click' , function() {
    let url = `${serverURL}/employees`;
    let  newEmployee = {
        first_name : 'Ola',
        last_name : 'adekunle',
        email : 'ola@gmail.com',
        gender : 'Male',
        ip_address : '127.0.0.3'
    };
    BrainHttp.post(url, newEmployee).then((data) => {
        console.log(data);
        fetchEmployees();
    }).catch((err) => {
        console.log(err);
    });
    
});

// put button
let putButton = document.querySelector('#put-btn');
putButton.addEventListener('click', function(){
    let employeeID = '_abcdef';
    let url = `${serverURL}/employees/${employeeID}`;
    let updatedEmployee = {
        first_name : 'John',
        last_name : 'Wilson',
        email : 'JW@gmail.com',
        gender : 'Male',
        ip_address : '127.0.0.9'
    };
    BrainHttp.put(url, updatedEmployee).then((data) => {
        console.log(data);
        fetchEmployees();
    }).catch((err) => {
        console.error(err)
    });
});

// Delete Button
let deleteButton = document.querySelector('#delete-btn');
deleteButton.addEventListener('click', function(){
    let employeeID = `_vwxyz`;
    let url = `${serverURL}/employees/${employeeID}`;
    BrainHttp.delete(url).then((data) => {
        console.log(data);
        fetchEmployees();
    }).catch((err) =>{
        console.error(err)
    });
});