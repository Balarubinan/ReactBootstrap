import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import TitleComp from './TitleComponent';
import ListComp from './ListComp';
import {} from "@mui/material/SvgIcon"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import LoginComp from './LoginComponent';
import HomeComp from "./HomeComp"
function App() {
  return (
    <Router>
      <Routes>
        {/* <IndexRedirect to="/"/> */}
        <Route path="/" element={<LoginComp/>}/>
        <Route path="/home" element={<HomeComp/>}/>
      </Routes>
    </Router>
);
}

export default App;
