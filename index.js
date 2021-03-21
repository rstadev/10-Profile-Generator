// const jest = require('jest');
const inquirer = require('inquirer');
const Employee = require('./lib/Employee.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const Manager = require('./lib/Manager.js');


function init() {
  inquirer.prompt([
  {
    type: 'input',
    name:'ID',
    message:'What is your Team Manager"s employee id?',
  },
  {
    type: 'input',
    name:'Name',
    message:'What is your Team Manager"s name?',
  },
  {
    type: 'input',
    name:'email',
    message:'What is your Team Manager"s email address?',
  },
  // {
  //   type: 'input',
  //   name:'',
  //   message:'What is your Team Manager"s office number?',
  // }
  ]).then(answers => {
    console.log(answers)
  });

}








writeToFile = (fileName, data) => {
    fs.writeFile(fileName,  data, (err) => 
    err ? console.error(err) : console.log("Success!")
  )};

// function init() {
//   inquirer.prompt(questions).then(answers => {
//     console.log(answers);
//     // const philipgen = new Employee(Object.values(answers));
//     console.log(philipgen);
//   });
// };

init();


// console.log(robert);
// const robert = new Employee('robert', 1, 'robert@place.net');