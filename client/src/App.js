import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./Components/LoginPage";
import HomePage from "./Components/HomePage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route index path="/" element={<LoginPage />}></Route>
          <Route path="/Home/:id" element={<HomePage />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
