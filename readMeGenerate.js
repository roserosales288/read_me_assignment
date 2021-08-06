function readMeGenerate(response){
return`# ${response.title}
## Description

 ${response.description}

## Table of Contents (Optional)
If your README is long, add a table of contents to make it easy for users to find what they need.
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

${response.installation}
## Usage

${response.usage}

## License
${response.license}
 
 
## How to Contribute
 
${response.contributors}
## Tests

${response.test}


## Question
github:${response.Github} <br>
email:${response.Email}


`
}
module.exports = readMeGenerate