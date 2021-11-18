import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import TitleComp from './TitleComponent';
import ListComp from './ListComp';
import {} from "@mui/material/SvgIcon"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import LoginComp from './LoginComponent';
function App() {
  return (
    <div className="container" 
    style={{backgroundColor:"rgba(0,0,0,0)"}}>
      <div className="row">
          <TitleComp/>
          <ListComp title="Ideal for New Investors"/>
          {/* <LoginComp/> */}
          <ListComp title="Trending coins"/>
          <ListComp title="Non-trending coins"/>
      </div>
    </div>
);
}

export default App;
