const userDao = require("../../dao/user");
const mockDao = require("../../dao/mock");

const { genneratePassword, checkPassword } = require("../../helper/password");

const Query = {
  users: () => {
    return userDao.query();
  },
  userById: (root, { id }) => {
    return userDao.getById(id);
  },
};

const Mutation = {
  createUser: async (root, { input }) => {
    const { password } = input;
    const hashPass = await genneratePassword(password);

    return userDao.create({ ...input, password: hashPass });
  },
  login: async (root, { input }) => {
    const { email, password } = input;
    try {
      const user = await userDao.findOne({ email });
      const checkPass = await checkPassword(password, user.password);
      if (user && checkPass) {
        return user;
      }
      return new Error("User not found");
    } catch (err) {
      throw new Error("500");
    }
  },
};

const CustomField = {
  User: {
    name: (root) => {
      return root._id + ":" + root.name;
    },
    books: (root) => {
      return mockDao.query();
    },
  },
};

module.exports = { Query, Mutation, CustomField };
