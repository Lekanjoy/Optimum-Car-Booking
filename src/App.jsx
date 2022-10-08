import { Routes, Route } from "react-router-dom";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import Login from "./components/Login.jsx";
import NavBar from "./components/NavBar";
import About from './components/About.jsx'

function App() {
  return (
    <div className="App font-ProximaNova text-primaryText  ">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
