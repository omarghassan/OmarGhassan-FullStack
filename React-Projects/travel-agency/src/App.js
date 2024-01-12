import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './App.css';
import Footer from './Footer';
import Navbar from './Navbar';
import Home from "./Home";
import Offers from "./Offers";
import Countries from "./Countries";
import Riyadh from "./Riyadh";
import Madrid from "./Madrid";
import Switzerland from "./Switzerland";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/offers" element={<Offers />}></Route>
            <Route path="/countries" element={<Countries />}></Route>
            <Route path="/riyadh" element={<Riyadh />}></Route>
            <Route path="/madrid" element={<Madrid />}></Route>
            <Route path="/switzerland" element={<Switzerland />}></Route>
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
