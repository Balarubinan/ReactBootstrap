import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import {} from "@mui/material/SvgIcon"
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import LoginComp from './LoginComponent';
import HomeComp from "./HomeComp"
import Navbar from "./Navbar"
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginComp/>}/>
        <Route path="/home" element={<HomeComp/>}/>
        <Route path="/allcryptos" element={<Navbar/>}/>
      </Routes>
    </Router>
);
}

export default App;
