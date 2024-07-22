import { useState } from "react";
import { useNavigate } from "react-router-dom";

import '../styles/UserLogin.css'
const UserLogin = () => {
    let [email,Setemail] = useState("")
    let [phone,setphone] =useState("")
    let [password,setpassword] =useState("")

    let navigate= useNavigate()

    let validate=()=>{
        if(email == "kural"|| phone =="6380564945" && password =="123456"){
            alert("login sucessful👌")
            navigate('/userhome')
        }else{
            alert("invalid credentials😓")
        }
    }
    return ( 
        <div className="userlogin">
            <div className="userlogindiv">
            <form action="">
                <h1>Login</h1>
                <div className="useremail">
                <label htmlFor="">
                    <h2>Email/phone</h2>
                    <input value={email||phone} onChange={(e)=>{Setemail(e.target.value)||setphone(e.target.value)}} type="text" placeholder="emailorphone" />
                </label>
                </div>
                <div className="userpassword">
                <label htmlFor="">
                    <h2>password</h2>
                    <input value={password} onChange={(e)=>(setpassword(e.target.value))} type="password" placeholder="password" />
                </label>
                </div>
                
                <button onClick={validate}>sign in</button>
                </form>
            </div>
        </div>
        
     );
}
 
export default UserLogin;