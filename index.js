const sequelize = require("./config/dbConfig");

const studentMethods = require("./data_access/studentRepo");

// studentMethods.createStudents();
studentMethods.findAll1();
studentMethods.findAll2();
studentMethods.findByPk();
studentMethods.findOne();
studentMethods.findAndCountAll();

//TODO: try this later
//studentMethods.findOrCreate();

sequelize
    .sync()
    .then(() => {
        console.log("Connected to database successfully");
    })
    .catch((err) => {
        console.log("Unable to sync Student Table" + err.message);
    });