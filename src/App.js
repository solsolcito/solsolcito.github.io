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
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/retratos" element={<Carousel />}/>
      <Route path="/Cv" element={<Cv />}/>
    </Routes>
    </Router> 
  );
}

export default App;
