const customField = {
  User: {
    name: (root) => {
      return root._id + ":" + root.name;
    },
  },
};

module.exports = customField;
