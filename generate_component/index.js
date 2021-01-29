const fs = require('fs');
const { component } = require('./component_templates.js');

console.log(process.argv)
//grab component folder name
const typeOfFolders = ['atoms', 'molecules', 'organisms', 'template'];
const atomicLevel = process.argv[2];
if (!atomicLevel) throw new Error('You must include a folder level name.');
if (!typeOfFolders.includes(atomicLevel)) throw new Error('Only atomic folders allowed');

// grab component name from terminal argument
const [name] = process.argv.slice(3);
if (!name) throw new Error('You must include a component name.');

const dir = `./src/${atomicLevel}/${name}/`;

// throw an error if the file already exists
if (fs.existsSync(dir)) throw new Error('A component with that name already exists.'); 

// create the folder
fs.mkdirSync(dir);

function writeFileErrorHandler(err) {
  if (err) throw err;
}

// component.js
fs.writeFile(`${dir}/${name}.js`, component(name), writeFileErrorHandler);
// component.scss
fs.writeFile(`${dir}/${name}.scss`, '', writeFileErrorHandler);
