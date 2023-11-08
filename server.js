require("dotenv").config();
const mysql2 = require('mysql2');
const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT;
const userRouter = require("./server/api/users/user.router");

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var mysql = require("mysql");
var pool = mysql.createPool({
  connectionLimit: 10,
  host: "example.org",
  user: "bob",
  password: "secret",
  database: "my_db",
});

app.use("/api/users", userRouter);

app.listen(port, () => console.log(`Listening at http://localhost:${port}`));
