const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    process.env.MYSQL_DATABASE,
    process.env.MYSQL_USER,
    process.env.MYSQL_PASSWORD,
    {
        host: process.env.MYSQL_HOST,
        dialect: 'mysql',
        define: {
            freezeTableName: true,
            timestamps: false
        }
    }
);

// console.log("DB:", process.env.MYSQL_DATABASE);
// console.log("USER:", process.env.MYSQL_USER);
// console.log("PASSWORD:", process.env.MYSQL_PASSWORD);
// console.log("HOST:", process.env.MYSQL_HOST);

module.exports = sequelize;