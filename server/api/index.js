const serverless = require("serverless-http");
const app = require("../app");

module.exports = (req, res) => {
  return serverless(app)(req, res);
};
