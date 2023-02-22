require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const path = require("path");
const router = require("../config/routes");
const YAML = require("yamljs");
const session = require("express-session");
const bodyParser = require("body-parser");
const cors = require("cors");

const publicDir = path.join(__dirname, "../public");
const viewsDir = path.join(__dirname, "./views");
const app = express();

/** Install cors */
app.use(cors());

/** Install body-parser */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/** use and setting express-session */
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    // cookie: { secure: false }
}));

/** Install request logger */
app.use(morgan("dev"));

/** Install JSON request parser */
app.use(express.json());

/** Install View Engine */
// const apiDocs = YAML.load(viewsDir + "/api-docs.yaml");
app.set("views", viewsDir);
app.set("view engine", "ejs");

/** Set Public Directory */
app.use(express.static(publicDir));

/** Install Router */
app.use(router);

module.exports = app;
