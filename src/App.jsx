import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Favorites from "./pages/Favorite";

export default function App() {
  return (
    
      <Router>
      
        
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Favorites" element={<Favorites />} />
        
        
      </Routes>
      </Router>
      
      
    
  )
}
