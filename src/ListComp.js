import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import fetchCoinData from './APIFecth'
import { InitConnection } from './APIFecth'
import { fetchIconUrls } from './APIFecth'
import {BsFillArrowDownCircleFill,BsFillArrowUpCircleFill} from "react-icons/bs"
import { useState,useEffect } from 'react'

var count=0
function ListComp(props){
    const [coins, setcoins] = useState([])  
    let [logo_urls, setlogo_urls] = useState({})
    function fetchCallback(res){
        setcoins(res)
        console.log("From callback :"+count++)
    }
    // api refreshes data only after 10 secs , so fetching after 11 secs
    useEffect(() => {
        // fetchCoinData(fetchCallback)
        fetchIconUrls().then(function(resp){
            setlogo_urls(resp.data.data)
            console.log("icons ftched")
            InitConnection(fetchCallback)
            console.log("after conne")
        }).catch(err=>console.log("Error while fetching Urls"+err))
        // let intervalId=setInterval(()=>fetchCoinData(fetchCallback),11000)
        // return () => {
        //     clearInterval(intervalId)
        // }
    }, [])
    let listTitle=props.title
    return(
    <div className="col-md-6 col-xl-6">
        <div className="col" style={{color: "rgb(255,255,255)","fontSize":"20px"}}>
                {listTitle}
        </div>
        <div className="card shadow mb-4" style={{opacity: 1,filter: "blur(0px)",height: "380px",backgroundColor: "rgba(255,255,255,0)",color: "rgb(255,255,255)",'overflow-y':'scroll'}}>
            {coins&&<h1>hheh</h1>&&coins.map((v,i,arr)=>{return(
            <div className="card-body" key={i}>
                <div className="row">
                    <div className="col-2">
                        <img src={logo_urls[v.s]}
                        height="50px" width="50px" alt="No logo"/>
                    </div>
                    <div className="col">
                        <div className="row">
                            <div className="col">
                                <h4 className="small font-weight-bold" style={{"fontSize":"26px"}}>{v.s}</h4>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <h4 className="small font-weight-bold">{v.s}</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="row">
                            <div className="col" style={{"fontSize":"27px"}}>
                                <h4 className="small font-weight-bold"><span className="float-right">${parseFloat(v.c).toFixed(2)}</span></h4>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                {parseFloat(v.P)>0&&
                                <h4 className="small font-weight-bold" style={{color:"green"}}><BsFillArrowUpCircleFill color="green" size="20"/>  <span className="float-left">{parseFloat(v.P).toFixed(2)+"%"}</span></h4>}
                                {parseFloat(v.P)<0&&
                                <h4 className="small font-weight-bold" style={{color:"red"}}><BsFillArrowDownCircleFill color="red" size="20"/>  <span className="float-left">{parseFloat(v.P).toFixed(2)+"%"}</span></h4>}
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