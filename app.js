const express = require("express");

const app = express();
const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
    res.send('<html><body style="background-color:green;text-align:center;font-family:Arial;padding-top:150px;"><h1>Hello World from Node.js!</h1><h2>AWS Elastic Beanstalk</h2><p>Version 2 - Pipeline Deployment 🚀</p></body></html>');
});

app.get("/health", (req, res) => {
    res.status(200).send("OK");
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Application running on port ${PORT}`);
});
