const formatError = function (error) {
  if (
    error.extensions &&
    error.extensions.code === "GRAPHQL_VALIDATION_FAILED"
  ) {
    return {
      message: error.message,
      code: error.extensions.code,
      statusCode: 400,
    };
  }
  if (error.extensions && error.extensions.code === "INTERNAL_SERVER_ERROR") {
    return {
      message: error.message,
      code: error.extensions.code,
      statusCode: 500,
    };
  }
  return error;
};

module.exports = {
  formatError,
};
