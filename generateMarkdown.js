

function generateMarkdown(response, data) {
  return `
# **${response.Title}**
---
## ${response.Description}
## ${response.Installation}
## ${response.Usage}
## ${response.License}
## ${response.Contributing}
## ${response.Tests}
## ${response.Questions}
---
`
}

module.exports = generateMarkdown;

