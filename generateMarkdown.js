function generateMarkdown(response, data) {
  return `
# **${response.Project Title}**

## ${ response.Description}
## ${ response.Table of Contents}
## ${ response.Installation}
## ${ response.Usage}
## ${ response.License}
## ${ response.Contributing}
## ${ response.Tests}
## ${ response.Questions}
`
}

module.exports = generateMarkdown;
