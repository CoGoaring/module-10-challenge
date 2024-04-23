const fs = require(`fs`);
const jest = require(`jest`);
const inquirer = require(`inquirer`);
const render = require(`./lib/render`);


const questions = [
    {
        type: `input`,
        name: `logo`,
        message: `Enter up to 3 characters:`,
        maxLength: 3
    },
    {
        type: `input`,
        name: `text-color`,
        message: `What color should the text be? (color keyword or hexadecimal)`
    },
    {
        type: `list`,
        name: `shape`,
        message: `Select a shape`,
        choices: [`circle`, `triangle`, `square`]
    },
    {
        type: `input`,
        name: `shape-color`,
        message: `What color should the shape be? (color keyword or hexadecimal)`
    }
]

function createSVG (fileName, data) {
    // I want each 3 letter combination to have unique filenames
    return fs.writeFileSync(`./examples/${fileName}`, data);
}

function init () {
    inquirer.prompt(questions).then((responses) => {
        console.log(`Generated logo.svg`);
        createSVG(`${responses.logo}.svg`, render(responses))
    })
}

init();