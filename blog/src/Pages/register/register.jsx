import { Link } from "react-router-dom"
import "./register.css"
import { useState } from "react"
import { axiosInstance } from "../../config";


export default function Register() {
  const [username,setUsername]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [error,setError]=useState(false);
  const handleSubmit= async (e)=>{
    e.preventDefault();
    setError(false);
    try{
      const res=await axiosInstance.post("/auth/register",{
        username,
        email,
        password
      });
      res.data && window.location.replace("/login");
    }catch(err){
      setError(true);
    }
  }

  return (
    <div className="Register">
        <span className="RegisterTitle">Register</span>
      <form className="RegisterForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input type="text" placeholder="Enter Your Username..." onChange={e=>setUsername(e.target.value)}></input>
        <label>Email</label>
        <input type="email" placeholder="ram@gmail.com" onChange={e=>setEmail(e.target.value)}></input>
        <label>Password</label>
        <input type="password" placeholder="Enter Your Password..." onChange={e=>setPassword(e.target.value)}></input>
        <button className="RegisterButton" type="submit">Register</button>
      </form>
      <button className="RegisterLoginButton">
      <Link to="/login" className="Link">Login</Link></button>
      {error && <span style={{color:"red", marginTop:"10px"}}>Username or Email already in use..!!</span>}
    </div>
  )
}
