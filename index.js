// const jest = require('jest');
const inquirer = require('inquirer');
const Employee = require('./lib/Employee.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const Manager = require('./lib/Manager.js');


const questions = [
  {
    type: 'input',
    name:'idM',
    message:'What is your Team Manager"s employee id?',
  },
  {
    type: 'input',
    name:'nameM',
    message:'What is your Team Manager"s name?',
  },
  {
    type: 'input',
    name:'emailM',
    message:'What is your Team Manager"s email address?',
  },
  {
    type: 'input',
    name:'officeM',
    message:'What is your Team Manager"s office number?',
  },
  {
    type: 'list',
    name:'roleAdd',
    message:'What team member would you like to add? If none, press none!',
    choices:['Team Manager', 'Engineer', 'Intern', 'None']
  }
]


function init() {
  inquirer.prompt(questions).then(answers => {
    //Callbacks from other defined functions using inquirer should go here, depending on the answer from roleAdd. This is where the engine should stay, change the prompt rather than this, don't forget.
    switch (answers.roleAdd) {
      case 'Engineer':
        console.log('Worked Engineer!');
        break;
      case 'Intern':
        console.log('Worked Intern!');
        break;
      
    }
    const mOutput = new Manager(answers.idM, answers.nameM, answers.emailM, answers.officeM);

    console.log(mOutput)
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