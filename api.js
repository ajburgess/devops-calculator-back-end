const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.disable('etag');
app.use(cors());

app.get("/add/:num1/:num2", (req, res) => {
    const num1 = parseFloat(req.params.num1);
    const num2 = parseFloat(req.params.num2);
    const answer = num1 + num2;
    res.json(answer);
});

module.exports = app;
