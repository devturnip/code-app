const Sequelize  = require('sequelize');

const sequelize = new Sequelize('chua', 'root', 'password', {
    host: "localhost",
    dialect: "mysql",
});

const db={};

try {
    module.exports = sequelize;
} catch (error) {
    console.log('Error: ', error);
}
