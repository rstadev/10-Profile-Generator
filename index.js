// const jest = require('jest');
const inquirer = require('inquirer');
// const Employee = require('./lib/Employee.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const Manager = require('./lib/Manager.js');

let employees = [];

const questions = [
  {
    type: 'input',
    name:'id',
    message:'What is your Team Manager"s employee id?',
  },
  {
    type: 'input',
    name:'name',
    message:'What is your Team Manager"s name?',
  },
  {
    type: 'input',
    name:'email',
    message:'What is your Team Manager"s email address?',
  },
  {
    type: 'input',
    name:'office',
    message:'What is your Team Manager"s office number?',
  },
];
const questionsEngineer = [
  {
    type: 'input',
    name:'id',
    message:'What is your Engineer"s employee id?',
  },
  {
    type: 'input',
    name:'name',
    message:'What is your Engineer"s name?',
  },
  {
    type: 'input',
    name:'email',
    message:'What is your Engineer"s email address?',
  },
  {
    type: 'input',
    name:'github',
    message:'What is your Engineer"s github profile?',
  },
];
const questionsIntern = [
  {
    type: 'input',
    name: 'id',
    message: 'What is your Intern"s employee id?',
  },
  {
    type: 'input',
    name: 'name',
    message: 'What is your Intern"s name?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your Intern"s email address?',
  },
  {
    type: 'input',
    name: 'school',
    message: 'What is your Intern"s school?',
  },
];


function init() {
  inquirer.prompt(questions).then(answers => {
    //Callbacks from other defined functions using inquirer should go here, depending on the answer from roleAdd. This is where the engine should stay, change the prompt rather than this, don't forget.



    // switch (answers.roleAdd) {
      //   case 'Engineer':
      //     console.log('Worked Engineer!');
      
      //     console.log(eOutput)
      
      //     break;
      //   case 'Intern':
      //     console.log('Worked Intern!');
      //     // const iOutput
      //     break;
      
      const mOutput = new Manager(answers.id, answers.name, answers.email, answers.office);
      employees.push(mOutput);
      console.log(employees);
      //   };

      // console.log(iOutput)
      addEmployee();
    });
    
};
function addEmployee() {
  inquirer.prompt(
  {
      type: 'list',
      name: 'roleAdd',
      message: 'What team member would you like to add? Press none to generate your file.',
      choices: ['Engineer', 'Intern', 'None. Generate File Please!']
  }).then(answers => {
    switch (answers.roleAdd) {
      case 'Engineer':
        console.log('Worked Engineer!');
        enginnerGen();
        break;
      case 'Intern':
        console.log('Worked Intern!');
        internGen();
        break;
      case 'None':
        console.log('Should exit and write file.')
    };
  });
};
  
function enginnerGen () {
  inquirer.prompt(questionsEngineer).then(answers => {
    const eOutput = new Engineer(answers.id, answers.name, answers.email, answers.github);
    employees.push(eOutput);
    console.log(employees);
    addEmployee();
  });
};

function internGen () {
  inquirer.prompt(questionsIntern).then(answers => {
    const iOutput = new Intern(answers.id, answers.name, answers.email, answers.school);
    employees.push(iOutput);
    console.log(employees);
    addEmployee();
  });
};





writeToFile = (fileName, data) => {
  fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log("Success!")
  )
};

// function init() {
//   inquirer.prompt(questions).then(answers => {
//     console.log(answers);
//     // const philipgen = new Employee(Object.values(answers));
//     console.log(philipgen);
//   });
// };
init();
// const eOutput = new Engineer(answers.idE, answers.nameE, answers.emailE, answers.github);

// console.log(robert);
// const robert = new Employee('robert', 1, 'robert@place.net');