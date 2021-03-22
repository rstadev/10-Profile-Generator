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
    name:'office',
    message:'What is your Team Manager"s office number?',
  },
  
]


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
      
      const mOutput = new Manager(answers.idM, answers.nameM, answers.emailM, answers.officeM);

      employees.push(mOutput);
      console.log(employees)
      //   };

      // console.log(iOutput)
      addEmployee();
    });
    
}

const questionsEngineer = [
  {
    type: 'input',
    name:'idE',
    message:'What is your Engineer"s employee id?',
  },
  {
    type: 'input',
    name:'nameE',
    message:'What is your Engineer"s name?',
  },
  {
    type: 'input',
    name:'emailE',
    message:'What is your Engineer"s email address?',
  },
  {
    type: 'input',
    name:'github',
    message:'What is your Engineer"s github profile?',
  },
  
];
function addEmployee() {
  inquirer.prompt(
  {
      type: 'list',
      name: 'roleAdd',
      message: 'What team member would you like to add? If none, press none!',
      choices: ['Team Manager', 'Engineer', 'Intern', 'None']
  }).then(answers => {
    switch (answers.roleAdd) {
      case 'Engineer':
        console.log('Worked Engineer!');

        console.log(eOutput)

        break;
      case 'Intern':
        console.log('Worked Intern!');
        // const iOutput
        break;
      case 'None':
        console.log('Should exit and write file.')
    };
  });
};
  
const questionsIntern = [
  {
    type: 'input',
    name: 'idI',
    message: 'What is your Intern"s employee id?',
  },
  {
    type: 'input',
    name: 'nameI',
    message: 'What is your Intern"s name?',
  },
  {
    type: 'input',
    name: 'emailI',
    message: 'What is your Intern"s email address?',
  },
  {
    type: 'input',
    name: 'school',
    message: 'What is your Intern"s school?',
  },
  // {
  //   type: 'list',
  //   name:'roleAdd',
  //   message:'What team member would you like to add? If none, press none!',
  //   choices:['Team Manager', 'Engineer', 'Intern', 'None']
  // }
]




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