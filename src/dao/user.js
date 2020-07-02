const modle = require("../model/User");

const query = (query) => {
  return modle.find(query);
};

const findOne = (query) => {
  return modle.findOne(query);
};

const getById = (id) => {
  return modle.findById(id);
};

const create = (input) => {
  return modle.create(input);
};

module.exports = {
  query,
  getById,
  create,
  findOne,
};
