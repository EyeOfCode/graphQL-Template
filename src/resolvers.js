const User = require("./module/User/resolver");
const Book = require("./module/book/resolver");

const customField = require("./helper/custom-field");

const Resolvers = {
  Query: {
    ...User.Query,
    ...Book.Query,
  },
  Mutation: {
    ...User.Mutation,
  },
  ...customField,
};

module.exports = Resolvers;
