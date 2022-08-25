class CustomApiError extends Error {
  constructor(msg, statusCode) {
    super(msg);
    this.statusCode = statusCode;
  }
}

const createNewCustomError = (msg, statusCode) => {
  return new CustomApiError(msg, statusCode);
};

module.exports = { createNewCustomError, CustomApiError };
