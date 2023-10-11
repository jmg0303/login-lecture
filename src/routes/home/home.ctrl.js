"use strict";

const home = (reg, res) => {
    res.render("home/index");
};

const login = (req, res) => {
    res.render("home/login");
};

module.exports = {
    home,
    login,
};