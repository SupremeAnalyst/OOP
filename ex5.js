const _ = require('lodash');
const {argb, colors} = require("./files/data");

const result = _.map(colors, (color, index) => {
    return {
        color: color,
        hex_name: '#' + _.map(argb[index].slice(0, 3), n => _.padStart(n.toString(16), 2, '0')).join('')
    }
});

const sortedResult = _.sortBy(result, 'color');

console.log(sortedResult);
