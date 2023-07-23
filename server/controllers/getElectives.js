const express = require("express");
const ELECTIVES_1 = require("../data/electives_1.json");
const ELECTIVES_2 = require("../data/electives_2.json");

const router = express.Router();

router.post("/electives", (req, res) => {
  const { branch } = req.body;

  if (
    branch === "CS" ||
    branch === "IT" ||
    branch === "CE" ||
    branch === "SE"
  ) {
    return res.json({
      electives1: ELECTIVES_1[branch],
      electives2: ELECTIVES_2[branch],
    });
  } else {
    return res.status(400).json({ message: "Invalid branch" });
  }
});

module.exports = router;
