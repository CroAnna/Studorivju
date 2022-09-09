import React from "react";
import { useState } from "react";
import "./LoginPage.scss";

const LoginPage = () => {
  const [loginView, setLoginView] = useState(true);
  const noAccountHandler = () => {
    console.log("promjena");
    setLoginView(!loginView);
  };
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
        <div className={loginView ? "input-container" : "hidden"}>
          <h2>Prijava</h2>
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <p>
            Nemaš račun? <span onClick={noAccountHandler}>Registriraj se.</span>
          </p>
          <button>Prijavi se</button>
        </div>
        <div className={loginView ? "hidden" : "input-container"}>
          <h2>Registracija</h2>
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <p>
            Imaš račun? <span onClick={noAccountHandler}>Prijavi se.</span>
          </p>
          <button>Prijavi se</button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
