import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Pixa from "./components/Pixa";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pixa" element={<Pixa />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
