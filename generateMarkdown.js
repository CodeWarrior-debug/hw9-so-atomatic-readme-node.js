// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
  licenseObj = {
    MIT:"![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)",
    Apache:"![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)",
  }
  return licenseObj[license];
}

//  function that returns the license link, If there is no license, return an empty string
function renderLicenseLink(license) {
  linkObj = {
    MIT: "(https://opensource.org/licenses/MIT)",
    Apache: "(https://opensource.org/licenses/Apache-2.0)",
  }
  if (linkObj[license]) return linkObj[license];
  return "";
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const fs = require('fs'); 

  try {
    const data = fs.readFileSync(`./${license}.txt`, 'utf8')
    return data;
  } catch (err) {
    return ""
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  
  return `
  #${data.title}

  ## Table of Contents
  ---
  * [Description](#description)
  * [Installation](#installation)
  * [Tests](#tests)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Questions](#questions)
  * [License](#license)

  ## Description
  ---
  ${data.description}

  ## Installation
  ---
  ${data.installation}

  ## Tests
  ---
  ${data.tests}

  ## Usage
  ---
  ${data.usage}

  ## Contributing
  ---
  ${data.contributing}

  ## Questions
  ---
  ${data.questions}

  ## License
  ---
  ${renderLicenseBadge(data.license)}${renderLicenseLink(data.license)}

  ${renderLicenseSection(data.license)}
`
;
}

module.exports = generateMarkdown;