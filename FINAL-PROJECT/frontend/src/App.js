import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./Pages/Home";
import About from "./Pages/About";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import TasksList from "./Pages/TasksList";
import AddTask from "./Pages/AddTask";
import EditTask from "./Pages/EditTask";
import Sitemap from "./Pages/Sitemap";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} ></Route>
            <Route path="/about" element={<About />} ></Route>
            <Route path="/all-tasks" element={<TasksList />} ></Route>
            <Route path="/addtask" element={<AddTask />} ></Route>
            <Route path="/edittask/:id" element={<EditTask />} ></Route>
            <Route path="/sitemap" element={<Sitemap />} ></Route>
          </Routes>
        </div>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
