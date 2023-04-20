const _ = require('lodash'); 

const colors = require('./files/colors.json');

const transformedColors = _.chain(colors) 
        .map((color) => { 
            const colorName = Object.keys(color)[0]; 
            const rgb = color[colorName].slice(0, 3); 
            return { color: colorName, rgb: rgb }; 
        })
        .sortBy('color') 
        .value(); 

console.log(transformedColors);
