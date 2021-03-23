// const jest = require('jest');
const inquirer = require('inquirer');
// const Employee = require('./lib/Employee.js');
const fs = require("fs");
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const Manager = require('./lib/Manager.js');

let employees = [];
let htmlBank = [];
const questionsManager = [
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
  inquirer.prompt(questionsManager).then(answers => {
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
      case 'None. Generate File Please!':
        renderHTML();
    };
  });
};
  
function enginnerGen () {
  inquirer.prompt(questionsEngineer).then(answers => {
    const eOutput = new Engineer(answers.id, answers.name, answers.email, answers.github);
    console.log(`${eOutput.getName()}`)
    // employees.push(eOutput);
    const htmlGen = `
    <div class="card">
    <div class= "card-header blue-style">
      <h4>${eOutput.getName()}</h4>
      <h5>${eOutput.getRole()}</h5>
    </div>
    <div class= "card-body">
      <div class="card" style="width: 18rem;">
        <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${eOutput.getId()}
        </li>
        <li class="list-group-item">Email: <a href ="mailto:${eOutput.getEmail()}">${eOutput.getEmail()}</a></li>
        <li class="list-group-item">Github: ${eOutput.getGitHub()}</li>
      </ul>
      </div>
    </div>
  </div>
    `
    htmlBank.push(htmlGen)
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


function renderHTML () {
  let html = `
  <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
  <link rel="stylesheet" type="text/css" href="../src/style.css">
  <title>My Team</title>
</head>
<body>
  <div class="jumbotron jumbotron-fluid gray biggerdiv">
    <div class="container text-center">
      <h1 class="display-4">My Team</h1>
    </div>
  </div>
  <div class="card-deck">
    ${htmlBank.join('')}
  </div>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js" integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0" crossorigin="anonymous"></script>
</body>
</html>
  `





  writeToFile('./dist/generated.html', html);
}



writeToFile = (fileName, data) => {
  fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log("Success!")
  )
};
init();



module.exports = employees
// function init() {
//   inquirer.prompt(questions).then(answers => {
//     console.log(answers);
//     // const philipgen = new Employee(Object.values(answers));
//     console.log(philipgen);
//   });
// };
// const eOutput = new Engineer(answers.idE, answers.nameE, answers.emailE, answers.github);

// console.log(robert);
// const robert = new Employee('robert', 1, 'robert@place.net');