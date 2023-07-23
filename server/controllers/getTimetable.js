const express = require("express");
const TIMETABLE = require("../data/core_timetable.json");
const ELECTIVES_TIMETABLE = require("../data/elective_timetable.json");
const router = express.Router();

router.post("/timetable", (req, res) => {
  const { section, elective1, elective2 } = req.body;

  if (section && elective1 && elective2) {
    const core_timetable = TIMETABLE[section];
    const elective1_Timetable = ELECTIVES_TIMETABLE[elective1];
    const elective2_Timetable = ELECTIVES_TIMETABLE[elective2];

    return res.json({
      timetable: {
        core_timetable: core_timetable,
        elective1_timetable: elective1_Timetable,
        elective2_timetable: elective2_Timetable,
      },
    });
  } else {
    return res.status(400).json({
      error: "Missing section or electives",
    });
  }
});

module.exports = router;
