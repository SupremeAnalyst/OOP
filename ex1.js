const _ = require('lodash');

const users = require('./files/users.json');

const southernHemisphereUsers = _.filter(users, user => parseFloat(user.address.geo.lat) < 0);
const transformedUsers = _.map(southernHemisphereUsers, user => {
    return { username: user.username, city: user.address.city };
});
const sortedUsers = _.orderBy(transformedUsers, ['city'], ['desc']);

console.log(sortedUsers);
