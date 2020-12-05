// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  
  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Test](#test)
  * [Liscense](#liscense)
  * [Contact](#contact)
  
  ## Description
  ${data.description}

  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ## Contributing 
  ${data.contribution}

  ## Test
  ${data.test} 

  ## License
  ${data.license}

  ## Contact
  ${data.github}(https://gitub.com/${data.github})
  ${data.email}

`;
}

module.exports = generateMarkdown;
