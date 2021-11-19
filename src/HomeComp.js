import TitleComp from "./TitleComponent"
import ListComp from "./ListComp"
function HomeComp(){
    return(<div className="container" 
    style={{backgroundColor:"rgba(0,0,0,0)"}}>
    <div className="row">
        <TitleComp/>
        <ListComp title="Ideal for New Investors"/>
        <ListComp title="Trending coins"/>
        <ListComp title="Non-trending coins"/>
    </div>
  </div>)
}

export default HomeComp;