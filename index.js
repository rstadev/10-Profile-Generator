const jest = require('jest');
const inquirer = require('inquirer');
const Employee = require('./lib/Employee.js')



const robert = new Employee('robert', 1, 'robert@place.net');


console.log(robert);