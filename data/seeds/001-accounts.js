const bcrypt = require("bcryptjs");

exports.seed = function(knex) {
  return knex("accounts").insert([
    {
      id: 1,
      username: "vangogh",
      password: bcrypt.hashSync("password", 12),
      avatar: "http://bit.ly/2UFlkAe"
    }
  ]);
};