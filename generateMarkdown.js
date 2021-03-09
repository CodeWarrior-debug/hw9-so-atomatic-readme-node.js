// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
  licenseObj = {
    MIT:"[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)",
    Apache:"[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)",
  }
  return licenseObj[license];
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  linkObj = {
    MIT: "(https://opensource.org/licenses/MIT)",
    Apache: "(https://opensource.org/licenses/Apache-2.0)",
  }
  return linkObj[license];
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const fs = require('fs'); 
 fs.readFile('Apache.txt', 'utf-8', (err, data) => { 
    if (err) throw err;
    return data; 
        })
      }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  
  return `
  ${renderLicenseBadge(data.license)}${renderLicenseLink(data.license)}
  ${renderLicenseSection(data.license)}
`
;
}

module.exports = generateMarkdown;
