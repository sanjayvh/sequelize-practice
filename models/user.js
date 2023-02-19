const Sequelize = require("sequelize");
const sequelize = require("../config/dbConfig");
const bcrypt = require("bcrypt");

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
        get() {
            // console.log("yoooooooo");
            return this.getDataValue('username').toUpperCase();
        }
    },
    password: {
        type: Sequelize.STRING,
        // allowNull: false
        set(value) {
            const hashedPassowrd = bcrypt.hashSync(value, 12);
            console.log("value:", value);
            console.log("hashedPassword:", hashedPassowrd);
            this.setDataValue('password', hashedPassowrd);
        }
    },
    age: {
        type: Sequelize.INTEGER,
        defaultValue: 27
    },
    isVerified: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    }
});

module.exports = User;