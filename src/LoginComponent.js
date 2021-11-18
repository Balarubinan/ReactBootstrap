import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import FetchPass from './APIFecth'
import { useState } from 'react';
import { Navigate } from 'react-router';
function LoginComp(){
    let [username, setusername] = useState("")
    let [pass, setpass] = useState("")
    const [logged, setlogged] = useState(false)
    function checkLogin(e){
        e.preventDefault()
        console.log("chekc login called")
        console.log(username+pass)
        if(pass=="adminpass"&&username=="RecklessRubin@hismail.com"){
            console.log("Login Success")
            setlogged(true)
        }
        else{
            console.log("login failed")
        }
    }
    function onUserChange(event){
        username=event.target.value
        setusername(username)
    }
    function onPassChange(event){
        pass=event.target.value
        setpass(pass)
    }
    return(
    <div className="col-lg-6" style={{color:'white'}}>
        {logged&&<Navigate to="/home"/>}
        <div className="p-5">
        <div className="text-center" style={{color:'white'}}>
            <h4 className="text-dark mb-4" style={{color:'white'}}>Welcome Back!</h4>
        </div>
        <form className="user" onSubmit={checkLogin} >
            <p>Username:</p>
            <div className="form-group"><input className="form-control form-control-user" type="email" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Enter Email Address..." name="email" onChange={onUserChange.bind(this)} value={username}/></div>
            <p>Password:</p>
            <div className="form-group"><input className="form-control form-control-user" type="password" id="exampleInputPassword" placeholder="Password" name="password" onChange={onPassChange.bind(this)} value={pass} /></div>
            <button className="btn btn-primary btn-block text-white btn-user" type="submit">Login</button>
        </form>
        <div className="text-center"><a className="small" href="forgot-password.html">Forgot Password?</a></div>
        <div className="text-center"><a className="small" href="register.html">Create an Account!</a></div>
    </div>
    </div>
    );
}
export default LoginComp;