import HomePage from "./Components/HomePage";
import MarkDown from "./Components/MarkDownOperations";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/mdeditor" element={<MarkDown />} />
      </Routes>
    </Router>
  );
}

export default App;
