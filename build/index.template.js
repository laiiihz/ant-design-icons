const path = require('path');

function generateIndexContent(basePath, componentNames) {
  let result = '';
  for (const name of componentNames) {
    const url = path.join(basePath, name);
    result += `export { default as ${name} } from './${url}';\n`;
  }

  // metadata.json
  result += `export { default as metadata } from './metadata';`;
  return result;
}

module.exports = generateIndexContent;
