const inquirer = require('inquirer')
const readMeGenerate = require('./readMeGenerate')
const fs = require('fs')
// s generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests

inquirer.prompt([{
    type: 'input',
    message: 'What is Your Title?',
    name: 'title'
}, {
    type: 'editor',
    message: 'What is Your Description?',
    name: 'description'
},{
    type:'editor',
    message: 'How Do You Install This Application?',
    name:'installation'
},{
    type:'editor',
    message: 'What Will This Be Used For?',
    name: 'usage'
},{
        type: 'list',
        message: 'Please Choose the Following',
        name:'license',
        choices:['MIT','Mozilla','IBM','Apache']
},
{
    type:'input',
        message:'Who are The Contributors?',
        name:'contributors'
},{
    type:'input',
    message:'What Tests to be Performed?',
    name:'test'
},
{
    type:'input',
    message:'What is Your Github Profile?',
    name:'Github'

},{
        type:'input',
        message:'What Is Your Email?',
        name:'Email'
}])
.then(function(response){
    const readMe= readMeGenerate(response)

    fs.writeFileSync('./README.md',readMe)

})