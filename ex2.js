const _ = require('lodash');

const clients = require('./files/clients.json').clients;

const kungurClients = _.filter(clients, client => client.address.city === 'Кунгур');
const sortedClients = _.orderBy(kungurClients, ['gender', 'age', 'name'], ['asc', 'desc', 'asc']);

console.log(sortedClients);
