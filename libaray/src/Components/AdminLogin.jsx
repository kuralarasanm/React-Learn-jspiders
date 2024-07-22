import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/AdminLogin.css'
const AdminLogin =()=>{
    let [email,Setemail]=useState("")
    console.log(email);
    let [phone,Setphone]=useState("")
    console.log(phone);
    let [password,setpassword]=useState("")
    console.log(password);

    let navigate= useNavigate()

    let validate=()=>{
        if(email == "kural" ||phone =="6380564945" && password =="123456"){
            alert("login sucessful👌")
            navigate('/adminhome')
        }else{
            alert("invalid credentials😒")
        }
    }
    return(
        <div className="adminlogin">
            <div className="admindiv">
            <form action="">
                <h1 style={{color:"white",position:"relative",left:"40px"}}>LOGIN</h1>
                <div className="adminemail">
                <label htmlFor="">
                    <h2>Email/phone</h2>
                    <input value={email||phone} onChange={(e)=>{Setemail(e.target.value)||Setphone(e.target.value)}} type="text" placeholder="emailorphone" />
                </label>
                </div>
                <div className="adminpassword">
                <label htmlFor="">
                    <h2>password</h2>
                    <input value={password} onChange={(e)=>(setpassword(e.target.value))} type="password" placeholder="password" />
                </label>
                </div>
                
                <br/>
                <button onClick={validate}>sign in</button>
            </form>
            </div>
        </div>
    )
}
export default AdminLogin;