const Sequelize = require("sequelize");
const sequelize = require("../config/dbConfig");

const User = sequelize.define('user', {
    userId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: Sequelize.STRING,
        allowNull: false,
        // primaryKey: true
    },
    password: {
        type: Sequelize.STRING,
        // allowNull: false
    },
    age: {
        type: Sequelize.INTEGER,
        defaultValue: 26
    },
    isVerified: {
        type: Sequelize.BOOLEAN,
        defaultValue: 0
    }
});

module.exports = User;