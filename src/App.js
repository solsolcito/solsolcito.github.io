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
      <Route path="/" element={<Home />}/>
      <Route path="/retratos" element={<Carousel />}/>
      <Route path="/Cv" element={<Cv />}/>
    </Routes>
    </div>
    </Router> 
  );
}

export default App;
