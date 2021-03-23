require('dotenv').config();
const Sequelize  = require('sequelize');

const sequelize = new Sequelize('chua', process.env.DB_USER, process.env.DB_PASS, {
    host: "localhost",
    dialect: "mysql",
});

try {
    module.exports = sequelize;
} catch (error) {
    console.log('Error: ', error);
}
