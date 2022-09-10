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

app.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  DB.query(
    "SELECT * FROM users WHERE BINARY username = ? AND BINARY password = ?",
    // BINARY za case-sensitive
    [username, password],
    (err, result) => {
      if (err) {
        console.log(err);
        res.send({ err: err });
      }
      if (result.length > 0) {
        res.send(result);
        console.log("dobri");
      } else {
        res.send({ message: "Krivi podaci za prijavu" });
        console.log("krivi");
      }
    }
  );
});

app.listen(3001, () => {
  console.log("server 3001");
});
