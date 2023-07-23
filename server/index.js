const express = require("express");
const cors = require("cors");

const getCoreSectionsRouter = require("./controllers/getCoreSections");
const getElectivesRouter = require("./controllers/getElectives");
const getTimetableRouter = require("./controllers/getTimetable");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", getCoreSectionsRouter);
app.use("/api", getElectivesRouter);
app.use("/api", getTimetableRouter);

app.listen(3001, () => {
  console.log(`Server started on port ${PORT}`);
});
