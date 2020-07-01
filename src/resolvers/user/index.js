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
    const { email, password } = input;

    const emailExpression = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const isValidEmail = emailExpression.test(String(email).toLowerCase());
    if (!isValidEmail) throw new Error("email not in proper format");

    if (password.length < 8)
      throw new Error("password should be minimum 8 characters");

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
