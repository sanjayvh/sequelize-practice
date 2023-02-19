const sequelize = require("sequelize");
const User = require("../models/user");
const { Op } = require("sequelize");

exports.createUsers = async () => {
    const results = await User.bulkCreate([
        {
            username: "Sanjay",
            password: "sanjay",
        },
        {
            username: "Mohit",
            age: 28,
            password: "mohit",
        },
        {
            username: "Yash",
            password: "yash",
            isVerified: true,
        },
        {
            username: "Rohit",
            age: 28,
            password: "rohit",
            isVerified: true,
        },
        {
            username: "Gote",
            age: 28,
            password: "gote",
            isVerified: true,
        },
    ]);

    results.forEach((element) => {
        console.log(element.toJSON());
    });
};

exports.findAll1 = async () => {
    const results = await User.findAll({
        attributes: ["username"],
        where: {
            [Op.or]: {
                age: 28,
                isVerified: true,
            },
        },
        raw: true,
    });

    console.log(
        "\nSelect usernames of users whose age is 28 or isVerified"
    );
    console.log(results);
    // results.forEach((element) => {
    //     console.log(element.toJSON());
    // });
};

exports.findAll2 = async () => {
    const results = await User.findAll({
        attributes: [
            "isVerified",
            [sequelize.fn("COUNT", sequelize.col("isVerified")), "num_users"],
        ],
        group: ["isVerified"],
        raw: true,
    });

    console.log(
        "\nGroup users based on isVerified and display the count of all groups as num_users"
    );
    console.log(results);
    // results.forEach((element) => {
    //     console.log(element.toJSON());
    // });
};

exports.findByPk = async () => {
    const results = await User.findByPk(4);

    console.log("\nSelect user by Pk");
    console.log(results.toJSON());
};

exports.findOne = async () => {
    const results = await User.findOne({
        where: {
            username: "Mohit",
        },
    });

    console.log("\nSelect a single user");
    console.log(results.toJSON());
};

exports.findAndCountAll = async () => {
    const results = await User.findAndCountAll({
        where: {
            age: 27,
        },
        raw: true,
    });

    console.log("\nSelect users having age as 27");
    const { count, rows } = results;
    console.log("count:", count);
    console.log("rows:", rows);
};
