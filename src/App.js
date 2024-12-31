import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Header from "./components/header";
import { theme } from "./constant/colors";
import Profile from "./pages/profile";

function App() {
  return (
    <div style={{backgroundColor:theme.background}}>
      <Header img={logo} />
      <div className="App-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
