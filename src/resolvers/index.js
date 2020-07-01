const User = require("./user");
const Book = require("./book");

const Resolvers = {
  Query: {
    ...User.Query,
    ...Book.Query,
  },
  Mutation: {
    ...User.Mutation,
  },
  ...User.CustomField,
};

module.exports = Resolvers;
