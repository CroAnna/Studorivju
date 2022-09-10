import React from "react";
import { useState } from "react";
import "./LoginPage.scss";
import Axios from "axios";

const LoginPage = () => {
  const [loginView, setLoginView] = useState(true);
  const [usernameReg, setUsernameReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");
  const [facultyReg, setFacultyReg] = useState("");
  const [validationStatus, setValidationStatus] = useState("");

  const noAccountHandler = () => {
    console.log("promjena");
    setLoginView(!loginView);
  };

  const registration = () => {
    console.log("registracija");
    console.log(usernameReg, passwordReg, facultyReg);

    if (usernameReg !== "" && passwordReg !== "" && facultyReg !== "") {
      Axios.post("http://localhost:3001/registration", {
        username: usernameReg,
        password: passwordReg,
        faculty: facultyReg,
      }).then((response) => {
        console.log(response);
      });
    } else {
      console.log("nekaj je prazno");
      setValidationStatus("Nisu svi podaci pravilno ispunjeni!");
    }
  };

  // dodaj da baca error ak vec postoji s tim usernameom - slicno ko ono kriva lozinka

  return (
    <div className="login-container">
      <div className="left">
        <h3>DOBRODOŠLI NA</h3>
        <h2>Studorivju</h2>

        <ul>
          <hr />
          <li>
            <span>+3000</span> studenata
          </li>
          <li>Olakšavamo studiranje</li>
          <li>Recenzije o klubovima, restoranima, kafićima...</li>
          <li>Besplatno - bilo i ostat će</li>
        </ul>
      </div>

      <div className="right">
        <div className={loginView ? "input-container login" : "hidden"}>
          <h2>Prijava</h2>
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <p>
            Nemaš račun? <span onClick={noAccountHandler}>Registriraj se.</span>
          </p>
          <button>Prijavi se</button>
        </div>
        <div className={loginView ? "hidden" : "input-container registration"}>
          <h2>Registracija</h2>
          <input
            type="text"
            placeholder="Username"
            onChange={(e) => {
              setUsernameReg(e.target.value);
            }}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => {
              setPasswordReg(e.target.value);
            }}
          />
          <select
            name="categories"
            id="categories"
            onChange={(e) => {
              setFacultyReg(e.target.value);
            }}
          >
            <option hidden value="">
              Faculty
            </option>
            <option value="FOI">FOI</option>
            <option value="FER">FER</option>
            <option value="PMF">PMF</option>
          </select>
          <p>
            Imaš račun? <span onClick={noAccountHandler}>Prijavi se.</span>
          </p>
          <button onClick={registration}>Registriraj se</button>{" "}
          <h3>{validationStatus}</h3>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
