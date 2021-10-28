const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");
const router = express.Router();
const livereload = require("livereload");
const server = livereload.createServer();
server.watch(__dirname + "/");
const reload = require("reload");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


router.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/index.html"));
});

router.get("/index.js", function (req, res) {
    res.sendFile(path.join(__dirname + "/index.js"));
  });