const sequelize = require("sequelize");
const Student = require("../models/student");
const { Op } = require("sequelize");

exports.createStudents = async () => {
    const results = await Student.bulkCreate(
        [
            {
                name: "Sanjay",
                school_year: 1996,
            },
            {
                name: "Mohit",
                favorite_class: "Mechanical",
                school_year: 1995,
            },
            {
                name: "Yash",
                school_year: 1996,
                subscribed_to_wittcode: false,
            },
            {
                name: "Rohit",
                favorite_class: "Mechanical",
                school_year: 1995,
                subscribed_to_wittcode: false,
            },
            {
                name: "Gote",
                favorite_class: "Marketing",
                school_year: 1995,
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
    });
    
    results.forEach((element) => {
        console.log(element.toJSON());
    });
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
    });

    results.forEach((element) => {
        console.log(element.toJSON());
    });
};
