import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './App.css';
import Home from './Home';
import Navbar from './Navbar';
import Create from "./Create";
import PageNotFound from "./PageNotFound";
import About from "./pages/About";
import BlogDetails from "./BlogDetails";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/create" element={<Create />}></Route>
            <Route path="/pages/about" element={<About />}></Route>
            <Route path="/blogs/:id" element={<BlogDetails />}></Route>
            <Route path="/*" element={<PageNotFound />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
