// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  
  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage]
  * Contributing
  * Test
  * Liscense
  * Contact
  
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
  ${data.github}

  ${data.email}

`;
}

module.exports = generateMarkdown;
