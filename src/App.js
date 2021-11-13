import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import TitleComp from './TitleComponent';
import ListComp from './ListComp';
function App() {
  return (
    <div className="container" 
    style={{backgroundColor:"rgba(0,0,0,0)"}}>
      <div className="row">
          <TitleComp/>
          <ListComp/>
          <ListComp/>
          <ListComp/>
      </div>
    </div>
);
}

export default App;
