let express = require("express");
let router = express.Router();
let db = require("../models");

router.post("/", (req, res) => {
  res.send(req.body);
});

module.exports = router;
