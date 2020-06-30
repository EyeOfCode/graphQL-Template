const Mock = require("../../model/Mock");

const Query = {
  books: () => {
    return Mock;
  },
};

module.exports = { Query };
