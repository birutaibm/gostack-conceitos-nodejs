const express = require("express");
const cors = require("cors");

const routes = require("./routes");
const {validateId} = require("./validators");

const app = express();

app.use(express.json());
app.use(cors());
app.use("/repositories/:id", validateId);
app.use(routes);

module.exports = app;
