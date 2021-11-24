import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import { InitConnection } from './APIFecth'
import { fetchIconUrls } from './APIFecth'
import {BsFillArrowDownCircleFill,BsFillArrowUpCircleFill} from "react-icons/bs"
import Navbar from './Navbar'



// Try reusing the list component for this component 
export default class SearchCryptoComp extends Component {
    constructor(props){
        super(props)
        this.listTitle="Search Coins"
        this.state={inpText:"",results:[],coins:[],logo_urls:{}}
        this.handleChange=this.handleChange.bind(this)
        this.fetchCallback=this.fetchCallback.bind(this)
        this.refreshContents=this.refreshContents.bind(this)
        this.refreshContents()
    }
    fetchCallback(res){
        //  implement filter logic here
        this.setState({coins:res.filter(coin=>coin.s.includes(this.state.inpText))})
    }
    refreshContents(){
        fetchIconUrls().then(resp=>{
            this.setState({logo_urls:resp.data.data})
            console.log("icons ftched")
            InitConnection(this.fetchCallback)
            console.log("after conne")
        }).catch(err=>console.log("Error while fetching Urls"+err))
    }
    handleChange(event){
        console.log(event.target.value)

        this.setState({inpText:event.target.value})
        console.log(this.state.coins.filter(coin=>coin.s.includes(this.state.inpText)))
        this.setState({coins:this.state.coins.filter(coin=>coin.s.includes(this.state.inpText))})
    }
    render() {
        return (
        <div className="col">
            <div className="col">
                <Navbar/>
            </div>
            <div className="col-md-6 col-xl-6">
        <div className="col" style={{color: "rgb(255,255,255)","fontSize":"20px"}}>
                {this.listTitle}
        </div>
        <div className="col">
            <input type="text" onChange={this.handleChange} style={{"width":"100%"}}/>
        </div>
        <div className="card shadow mb-4" style={{opacity: 1,filter: "blur(0px)",height: "380px",backgroundColor: "rgba(255,255,255,0)",color: "rgb(255,255,255)",'overflow-y':'scroll'}}>
            {this.state.coins&&<h1>hheh</h1>&&this.state.coins.map((v,i,arr)=>{return(
            <div className="card-body" style={{"height":"100%"}}key={i}>
                <div className="row">
                    <div className="col-2">
                        <img src={this.state.logo_urls[v.s]}
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
        </div>
        )
    }
}
