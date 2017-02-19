const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const config = require("./config");

const User = require("./models/user");
const port = process.env.PORT || 8080;
const app = express();

mongoose.connect(config.database);
app.set("secret", config.secret);
 