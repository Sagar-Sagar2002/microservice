const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Welcome to DevOps Big Project with Git, Jenkins, Docker, Kubernetes, AWS & NGINX Ingress!");
});

app.listen(3000, () => {
    console.log("App running on port 3000");
});

