```javascript
const express = require("express");

const app = express();
const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Node.js Beanstalk App</title>
            <style>
                body {
                    margin: 0;
                    height: 100vh;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-family: Arial, sans-serif;
                    background: linear-gradient(135deg, #667eea, #764ba2);
                    color: white;
                }

                .container {
                    text-align: center;
                    padding: 40px;
                    background: rgba(255, 255, 255, 0.15);
                    border-radius: 15px;
                    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
                }

                h1 {
                    margin-bottom: 15px;
                }

                p {
                    font-size: 18px;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>Hello World from Node.js!</h1>
                <p>Deployed using AWS Elastic Beanstalk</p>
                <p>Version 2 🚀</p>
            </div>
        </body>
        </html>
    `);
});

app.get("/health", (req, res) => {
    res.status(200).send("OK");
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Application running on port ${PORT}`);
});
```

