const Sequelize = require("sequelize");

const sequelize = new Sequelize("sequelize_db", "root", "Sanjay@678", {
    host: "localhost",
    dialect: "mysql",
    define: {
        freezeTableName: true,
        timestamps: false,
    }
});

sequelize
    .sync()
    .then(() => {
        console.log("Connection Successful");
    })
    .catch((err) => {
        console.log("Unable to connect to database" + err.message);
    });

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

console.log(sequelize.models);