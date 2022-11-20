const express = require("express");
const authRouter = require("./routesApi/auth.router.js");

const routerApi = (app) => {
  const router = express.Router();
  app.use("/api/v1", router);
  router.use("/login", authRouter);

};

module.exports = routerApi;
