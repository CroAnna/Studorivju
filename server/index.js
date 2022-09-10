const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const DB = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "studorivju",
});

app.post("/registration", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const faculty = req.body.faculty;
  console.log(`umetanje ${username}, ${password}, ${faculty}`);

  DB.query(
    "INSERT INTO users (username, password, faculty) VALUES (?,?,?)",
    [username, password, faculty],
    (err, result) => {
      console.log(result);
      console.log(err);
    }
  );
});

app.listen(3001, () => {
  console.log("server 3001");
});
