const sequelize = require("./config/dbConfig");

const studentMethods = require("./data_access/studentRepo");
const userMethods = require("./data_access/userRepo");

// studentMethods.createStudents();
studentMethods.findAll1();
studentMethods.findAll2();
studentMethods.findByPk();
studentMethods.findOne();
studentMethods.findAndCountAll();

//TODO: try this later
//studentMethods.findOrCreate();

// userMethods.createUsers();
userMethods.findAll1();
userMethods.findAll2();
userMethods.findByPk();
userMethods.findOne();
userMethods.findAndCountAll();

//TODO: try this later
//userMethods.findOrCreate();

sequelize
    .sync()
    .then(() => {
        console.log("Connected to database successfully");
    })
    .catch((err) => {
        console.log("Unable to sync Student Table" + err.message);
    });