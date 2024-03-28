// Using AJAX with REST API

import { BrainHttp } from "./api/BrainHttp.js";
const serverURL = `http://127.0.0.1:3000/api`;

// Get button
let getButton = document.querySelector('#get-btn');
getButton.addEventListener('click', function() {
    fetchEmployees();
});

let fetchEmployees = () =>{
    let http = new  BrainHttp();
    let url = `${serverURL}/employees`;
    http.get(url, (err, employees) => {
        if (err) throw err;
        let tableRow = ''
        for(let employee of employees){
            tableRow += `<tr>
                            <td>${employee.id}</td>
                            <td>${employee.first_name}</td>
                            <td>${employee.last_name}</td>
                            <td>${employee.email}</td>
                            <td>${employee.gender}</td>
                            <td>${employee.ip_address}</td>
                         </tr>`;
        }
        document.querySelector('#table-body').innerHTML = tableRow;
    });
};

// Post Button
let postBUtton = document.querySelector('#post-btn');
postBUtton.addEventListener('click', function(){
    let url = `${serverURL}/employees`;
    
    let employee ={
        first_name: 'shola',
        last_name: 'Janet',
        email: 'shola@gmail.com',
        gender: 'Male',
        ip_address: '127.0.0.12'
    };
    let http = new BrainHttp();
    http.post(url, employee, (data) => {
        alert(JSON.stringify(data));
        fetchEmployees();
    });
});

// Put Button
let putButton = document.querySelector('#put-btn');
putButton.addEventListener('click' , function(){
    let empID = '_abcdef';
    let employee = {
        id: empID,
        first_name: 'John',
        last_name: 'Wilson',
        email: 'johnwilson@gmail.com',
        gender: 'Male',
        ip_address: '255.255.255.255',
    };

    let url = `${serverURL}/employees/${empID}`;
    let http= new BrainHttp();
    http.put(url, employee, (data)=> {
        alert(JSON.stringify(data));
        fetchEmployees();
    });
});

// Delete Button
let deleteButton = document.querySelector('#delete-btn');
deleteButton.addEventListener('click', function(){
    let employeeID = `_vwxyz`;
    let url = `${serverURL}/employees/${employeeID}`;
    let http = new BrainHttp();
    http.delete(url, (data) => {
        alert(JSON.stringify(data));
        fetchEmployees();
    });
})