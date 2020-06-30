const UserModle = require("../../model/User");

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

module.exports = { Query, Mutation };
