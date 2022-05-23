const inquirer = require('inquirer');
const generatePage = require('./src/create-page');


//questions to ask the user
const initialQuestions = [
    {
        type: 'input',
        name: 'managerName',
        message: 'Enter team managers name.'
    },
    {
        type: 'input',
        name: 'managerID',
        message: 'Enter team managers ID.'
    },
    {
        type: 'input',
        name: 'managerEmail',
        message: 'Enter team managers email address.'
    },
    {
        type: 'input',
        name: 'managerOffice',
        message: 'Enter team managers office number.'
    },
    {
        type: 'list',
        name: 'addMember',
        message: 'Which member would you like to add?',
        choices: [
            'Engineer',
            'Intern',
            "I'm done building my team."
        ]
    }
]

const loopingQuestions = [
    {
        type: 'list',
        name: 'addMember',
        message: 'Which member would you like to add?',
        choices: [
            'Engineer',
            'Intern',
            "I'm done building my team."
        ]
    },
    
]

const engineerQuestions = [
    {
        type: 'input',
        name: 'engineerName',
        message: 'Enter engineers name.'
    },
    {
        type: 'input',
        name: 'engineerID',
        message: 'Enter engineers ID.'
    },
    {
        type: 'input',
        name: 'engineerEmail',
        message: 'Enter engineers email address.'
    },
    {
        type: 'input',
        name: 'engineerGithub',
        message: 'Enter engineers github address.'
    }
]

const internQuestions = [
    {
        type: 'input',
        name: 'internName',
        message: 'Enter interns name.'
    },
    {
        type: 'input',
        name: 'internID',
        message: 'Enter interns ID.'
    },
    {
        type: 'input',
        name: 'internEmail',
        message: 'Enter interns email address.'
    },
    {
        type: 'input',
        name: 'internSchool',
        message: 'Enter interns school.'
    }
]

let manager = {};

let engineers = []
let interns = [];

async function promptManager(){
    let response = '';
    await inquirer.prompt(initialQuestions)
    .then((answers) => {
        manager.name = answers.managerName;
        manager.id = answers.managerID;
        manager.email = answers.managerEmail;
        manager.officeNumber = answers.managerOffice;
        response = answers.addMember;
    });

    return response;
};

async function promptEngineer(){
    let currentEngineer = {};
    await inquirer.prompt(engineerQuestions)
    .then((answers) => {
        currentEngineer.name = answers.engineerName;
        currentEngineer.id = answers.engineerID;
        currentEngineer.email = answers.engineerEmail;
        currentEngineer.github = answers.engineerGithub;
        engineers.push(currentEngineer);
    })

    await inquirer.prompt(loopingQuestions)
    .then((loop) => {
        if(loop.addMember === "I'm done building my team."){
            generatePage(manager, engineers, interns);
            return;
        } 
        else if(loop.addMember === "Engineer") {
            promptEngineer();
        }
        else if(loop.addMember === "Intern"){
            promptIntern();
        }
    })
};

async function promptIntern(){
    let currentIntern = {};
    await inquirer.prompt(internQuestions)
    .then((answers) => {
        currentIntern.name = answers.internName;
        currentIntern.id = answers.internID;
        currentIntern.email = answers.internEmail;
        currentIntern.school = answers.internSchool;
        interns.push(currentIntern);
    })

    await inquirer.prompt(loopingQuestions)
    .then((loop) => {
        if(loop.addMember === "I'm done building my team."){
            generatePage(manager, engineers, interns);
            return;
        } 
        else if(loop.addMember === "Engineer") {
            promptEngineer();
        }
        else if(loop.addMember === "Intern"){
            promptIntern();
        }
    })
};


promptManager()
.then((answer) => {
    if(answer === "I'm done building my team."){
        generatePage(manager, engineers, interns);
    }
    if(answer === 'Engineer'){
        promptEngineer();
    }
    if(answer === 'Intern'){
        promptIntern();
    }
})

