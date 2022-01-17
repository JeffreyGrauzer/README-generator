// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
//function renderLicenseBadge(license) {

//}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
//function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
//function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // return `# ${data.title}`;
  // console.log(data);
  return `# ${data.title}
    ## Name

    _Please provide your name:

    ${data.name}

    _Please provide your GitHub username:

    ## Github Username

    ${data.username}

    ## Email Address

    _Please provide your email address:

    ${data.email}

    ## Description

    _Please describe what your application does:

    ${data.description}

    ## Installation Instructions

    _Please inform as to how to install the app:

    ${data.instructions}

    ## Licenses

    _Please select the licenses used for this project:
    
    ${data.license}
  `;
  
}

module.exports = generateMarkdown;
