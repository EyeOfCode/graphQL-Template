const UserModle = require("../../model/User");
const MockModle = require("../../model/Mock");

const Query = {
  users: () => {
    return UserModle.find();
  },
  userById: (root, { id }) => {
    return UserModle.findById(id);
  },
};

const Mutation = {
  async createUser(root, { input }) {
    return UserModle.create(input);
  },
};

const CustomField = {
  User: {
    name: (root) => {
      return root._id + ":" + root.name;
    },
    books: (root) => {
      return MockModle;
    },
  },
};

module.exports = { Query, Mutation, CustomField };
