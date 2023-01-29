const fs = require('fs')
const path = require('path')
const inquirer = require('inquirer')


const Manager = require();
const Intern = require(); 
const Engineer = require();


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