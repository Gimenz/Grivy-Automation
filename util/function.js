const chalk = require('chalk');
const fs = require('fs');
/**
 * Delay (sleep)
 * @param {Number} ms miliseconds 
 * @returns {Promise}
 */
const sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Get text with color
 * @param  {String} text
 * @param  {String} color
 * @return  {String} Return text with color
 */
const color = (text, color) => {
    return !color ? chalk.green(text) : chalk.keyword(color)(text)
}

/**
 * Generates random user agent
 * @returns {String}
 */
const randomUA = () => {
    let agents = JSON.parse(fs.readFileSync('./src/ua.json'));
    return agents[Math.floor(Math.random() * agents.length)];
}

module.exports = {
    sleep,
    color,
    randomUA
}