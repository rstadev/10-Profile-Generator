const jest = require('jest');
const inquirer = require('inquirer');

function Employee(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.getName = () => {

    }
    this.getId = () => {
        
    }
    this.getEmail= () => {
        
    }
    this.getRole = () => {
        
    }
};


const robert = new Employee('robert', 1, 'robert@place.net');

console.log(robert);