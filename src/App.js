import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from "./pages/Home";
import './App.css';
import Carousel from "./components/Carousel";
import Cv from "./pages/Cv";
import Sol from "./pages/Sol";
function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Pagina Principal</Link>
            </li>


          </ul>

        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/retratos" element={<Carousel />} />
          <Route path="/Cv" element={<Cv />} />
          <Route path="/Sol" element={<Sol />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
