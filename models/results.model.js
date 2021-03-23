const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize')

const Results = sequelize.define('Results', { 
    res_id: {
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true 
    },
    results: {
        type: DataTypes.INTEGER,
    }, 
}, {tableName: 'result'});

console.log(Results === sequelize.models.Results); 
Results.sync();
module.exports = Results;