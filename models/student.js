const Sequelize = require("sequelize");
const sequelize = require("../config/dbConfig");

const Student = sequelize.define("student", {
    student_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            len: [4, 20],
        },
    },
    favorite_class: {
        type: Sequelize.STRING(25),
        defaultValue: "Computer Science",
    },
    school_year: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    subscribed_to_wittcode: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
    },
});

module.exports = Student;