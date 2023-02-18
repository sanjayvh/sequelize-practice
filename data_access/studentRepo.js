const sequelize = require("sequelize");
const Student = require("../models/student");
const { Op } = require("sequelize");

exports.createStudents = async () => {
    const results = await Student.bulkCreate(
        [
            {
                name: "Sanjay",
                school_year: 2016,
            },
            {
                name: "Mohit",
                favorite_class: "Mechanical",
                school_year: 2015,
            },
            {
                name: "Yash",
                school_year: 2016,
                subscribed_to_wittcode: false,
            },
            {
                name: "Rohit",
                favorite_class: "Mechanical",
                school_year: 2015,
                subscribed_to_wittcode: false,
            },
            {
                name: "Gote",
                favorite_class: "Marketing",
                school_year: 2015,
                subscribed_to_wittcode: false,
            },
        ],
        {
            validate: true,
        }
    );

    results.forEach((element) => {
        console.log(element.toJSON());
    });
};

exports.findAll1 = async () => {
    const results = await Student.findAll({
        attributes: ["name"],
        where: {
            [Op.or]: {
                favorite_class: "Computer Science",
                subscribed_to_wittcode: true,
            },
        },
        raw: true,
    });

    console.log(
        "\nSelect names of students whose fav class is CS or subscribed to wittcode"
    );
    console.log(results);
    // results.forEach((element) => {
    //     console.log(element.toJSON());
    // });
};

exports.findAll2 = async () => {
    const results = await Student.findAll({
        attributes: [
            "school_year",
            [
                sequelize.fn("COUNT", sequelize.col("school_year")),
                "num_students",
            ],
        ],
        group: ["school_year"],
        raw: true,
    });

    console.log(
        "\nGroup students based on school year and display the count of all groups as num_students"
    );
    console.log(results);
    // results.forEach((element) => {
    //     console.log(element.toJSON());
    // });
};

exports.findByPk = async () => {
    const results = await Student.findByPk(4);

    console.log("\nSelect student by Pk");
    console.log(results.toJSON());
};

exports.findOne = async () => {
    const results = await Student.findOne({
        where: {
            name: 'Mohit'
        }
    });

    console.log("\nSelect a single student");
    console.log(results.toJSON());
};

exports.findAndCountAll = async () => {
    const results = await Student.findAndCountAll({
        where: {
            school_year: 2016
        },
        raw: true
    });
    
    console.log("\nSelect students having school_year as 2016");
    const { count, rows } = results;
    console.log("count:", count);
    console.log("rows:", rows);
};