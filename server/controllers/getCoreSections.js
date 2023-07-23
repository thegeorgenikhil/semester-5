const express = require("express");
const CORE_SECTIONS = require("../data/core_sections.json");

const router = express.Router();

router.post("/core_sections", (req, res) => {
  const { branch } = req.body;

  if (
    branch === "CS" ||
    branch === "IT" ||
    branch === "CE" ||
    branch === "SE"
  ) {
    return res.json({
      sections: CORE_SECTIONS[branch],
    });
  } else {
    return res.status(400).json({ message: "Invalid branch" });
  }
});

module.exports = router;
