var express = require("express");
var router = express.Router();

router.get("/", (req, res, next) => {
  res.send({ result: "THE API IS WORKING PROPERLY" });
});

module.exports = router;
