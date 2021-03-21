// const jest = require('jest');
const inquirer = require('inquirer');
const Employee = require('./lib/Employee.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const Manager = require('./lib/Manager.js');

const questions = [
  {
    type: 'input',
    name:'Mname',
    message:'What is your Team Manager"s name?',
  },



];




writeToFile = (fileName, data) => {
    fs.writeFile(fileName,  data, (err) => 
    err ? console.error(err) : console.log("Success!")
  )};

function init() {
  inquirer.prompt(questions).then(answers => {
    console.log(answers)
  })
}

init();


// console.log(robert);
// const robert = new Employee('robert', 1, 'robert@place.net');