import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import fetchCoinData from './APIFecth'
import {BsFillArrowDownCircleFill,BsFillArrowUpCircleFill} from "react-icons/bs"
import { useState,useEffect } from 'react'

var count=0
function ListComp(props){
    const [coins, setcoins] = useState([])  
    function fetchCallback(res){
        setcoins(res)
        console.log("From callback :"+count++)
    }
    // fetchCoinData(fetchCallback)
    // setInterval(()=>fetchCoinData(fetchCallback),11000) // api refreshes data only after 10 secs.....so fetching after 11 secs
    useEffect(() => {
        fetchCoinData(fetchCallback)
        let intervalId=setInterval(()=>fetchCoinData(fetchCallback),11000)
        return () => {
            clearInterval(intervalId)
        }
    }, [])
    let listTitle=props.title
    return(
    <div className="col-md-6 col-xl-6" style={{'overflow-y':'scroll'}}>
        <div className="card shadow mb-4" style={{opacity: 1,filter: "blur(0px)",height: "380px",backgroundColor: "rgba(255,255,255,0)",color: "rgb(255,255,255)"}}>
            <div className="col">
                {listTitle}
            </div>
            {coins&&<h1>hheh</h1>&&coins.map((v,i,arr)=>{return(
            <div className="card-body" key={i}>
                <div className="row">
                    <div className="col-2">
                        <img src={v.logo_url}
                        height="50px" width="50px" alt="No logo"/>
                    </div>
                    <div className="col">
                        <div className="row">
                            <div className="col">
                                <h4 className="small font-weight-bold" style={{"fontSize":"26px"}}>{v.name}</h4>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <h4 className="small font-weight-bold">{v.id}</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="row">
                            <div className="col" style={{"fontSize":"27px"}}>
                                <h4 className="small font-weight-bold"><span className="float-right">${parseFloat(v.price).toFixed(2)}</span></h4>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                {parseFloat(v['1h'].price_change)>0&&
                                <h4 className="small font-weight-bold" style={{color:"green"}}><BsFillArrowUpCircleFill color="green" size="20"/>  <span className="float-left">{parseFloat(v['1h'].price_change).toFixed(2)+"%"}</span></h4>}
                                {parseFloat(v['1h'].price_change)<0&&
                                <h4 className="small font-weight-bold" style={{color:"red"}}><BsFillArrowDownCircleFill color="red" size="20"/>  <span className="float-left">{parseFloat(v['1h'].price_change).toFixed(2)+"%"}</span></h4>}
                            </div>
                        </div>
                    </div>
                </div>
                <hr style={{color:"rgba(255,255,255,0.5)"}}/>
            </div>)})}
            
        </div>
    </div>
    )
}

export default ListComp;