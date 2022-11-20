const express = require("express");
const router = express.Router();

const authService = require("../../services/auth.service.js");
const service = new authService();

router.post("/", async (req, res) => {
  try {
    const user = req.body;
    const response = await service.getUser(user.user, user.password);
    res.json(response);
  } catch (error) {
    res.json(error);
  }
});

module.exports = router;
