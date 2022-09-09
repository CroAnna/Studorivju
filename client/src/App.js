import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./Components/LoginPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route index path="/" element={<LoginPage />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
