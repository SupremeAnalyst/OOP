const _ = require('lodash');

const colors = require('./files/colors.json');

const colorNames = _.flatMap(colors, _.keys);
const shortColorNames = _.filter(colorNames, color => color.length < 6);
const sortedColorNames = _.sortBy(shortColorNames, color => color.toLowerCase());

console.log(sortedColorNames);