const express = require('express');
const router = express.Router();

// employees data
let employees = [
    {
        id: '_abcdef',
        first_name: 'John',
        last_name: 'Wilson',
        email: 'john@gmail.com',
        gender: 'Male',
        ip_address: '127.0.0.1'
    },
    {
        id: '_vwxyz',
        first_name: 'Laura',
        last_name: 'Wilson',
        email: 'laura@gmail.com',
        gender: 'Female',
        ip_address: '9845.56.32'
    }
];

// Get request
router.get('/employees', (req, res) =>{
    console.log(`GET Request Received at server.. ${new Date().toLocaleTimeString()}`);
    res.json(employees);
});

// Get ID
let getID = () =>{
    return '_' + Math.random().toString(36).substr(2, 9);
};

// post request
router.post('/employees', (req, res) => {
    let employee = {
        id: getID(),
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        gender: req.body.gender,
        ip_address: req.body.ip_address
    }
    employees.push(employee);
    console.log(`POST Request Received at server.. ${new Date().toLocaleTimeString()}`);
    res.json({msg: 'Post Request is successful'});
});

// PUT Request
router.put('/employees/:id', (req, res) =>{
    let empId = req.params.id;
    let updateEmployee = {
        id: empId,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        gender: req.body.gender,
        ip_address: req.body.ip_address
    }
    let existingEmployee = employees.find((employee) => {
        return employee.id === empId
    });
    employees.splice(employees.indexOf(existingEmployee), 1,updateEmployee);
    console.log(`Put Request Received at server.. ${new Date().toLocaleTimeString()}`);
    res.json({msg: 'Put Request is successful'});

})

// Delete request
router.delete('/employees/:id', (req, res) => {
    let empId = req.params.id;
    employees = employees.filter((employee) => {
        return employee.id !== empId;
    });
    console.log(`Delete Request Received at server.. ${new Date().toLocaleTimeString()}`);
    res.json({msg: 'Delete Request is successful'});

})


module.exports = router;