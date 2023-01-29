const fs = require('fs')
const path = require('path')
const inquirer = require('inquirer')


const Manager = require("./library/manager");
const Intern = require("./library/intern"); 
const Engineer = require("./library/engineer");


const team = []

const selectEmployee = [
    {
      type: "list",
      choices: ["manager", "engineer", "intern", "none"],
      message: "Which kind of employee profile do you want to add?",
      name: "employees",
    },
  ];


const managerInputs = [
    {
        type: 'input',
        message: 'manager name:',
        name: 'name'
    },

    {
        type: 'input',
        message: 'employee id:',
        name: 'id:'
    },

    {
        type: 'input',
        message: 'email:',
        name: 'email'
    },

    {
        type: 'input',
        message: 'office number:',
        name: 'office'
    },
]


const engineerInputs = [
    {
        type: 'input',
        message: 'engineer name:',
        name: 'name'
    },

    {
        type: 'input',
        message: 'employee id:',
        name: 'id:'
    },

    {
        type: 'input',
        message: 'email:',
        name: 'email'
    },

    {
        type: 'input',
        message: 'github url:',
        name: 'github'
    },
]


const internInputs = [
    {
        type: 'input',
        message: 'intern name:',
        name: 'name'
    },

    {
        type: 'input',
        message: 'employee id:',
        name: 'id:'
    },

    {
        type: 'input',
        message: 'email:',
        name: 'email'
    },

    {
        type: 'input',
        message: 'school:',
        name: 'school'
    },
]



function makeTeam(data) {
    fs.writeFileSync("./dist/sample.html", data, 'utf-8');
  }


  function create() {
    inquirer.prompt(selectEmployee).then((data) => {
      const select = data.employees;

      switch (select) {
        case "manager":
          managerInfo();
          break;

          case "engineer":
          engineerInfo();
          break;

        case "intern":
          internInfo();
          break;
        
        case "none":
          const html = render(team)
          buildTeam(html);
          
          break;
      }})
  }

  function managerInfo() {
inquirer.prompt(managerInputs).then((data) =>
{
    const manager = new Manager(
data.name,
data.id,
data.email,
data.office,

team.push(manager)
    )})
  }


  function engineerInfo() {
    inquirer.prompt(engineerInputs).then((data) =>
    {
        const engineer = new Engineer(
    data.name,
    data.id,
    data.email,
    data.github,
    
    team.push(engineer)
        )})
      }


      function internInfo() {
        inquirer.prompt(internInputs).then((data) =>
        {
            const intern = new Intern(
        data.name,
        data.id,
        data.email,
        data.school,
        
        team.push(intern)
            )})
          }