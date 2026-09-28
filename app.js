const express = require("express");

const app = express();
const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
    res.send("Hello World from Node.js on AWS Elastic Beanstalk!");
});

app.get("/health", (req, res) => {
    res.status(200).send("OK");
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Application running on port ${PORT}`);
});

