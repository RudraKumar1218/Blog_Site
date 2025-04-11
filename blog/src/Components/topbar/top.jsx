import React, { useContext } from 'react'
import "./top.css";
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';

export default function Top() {
  const {user,dispatch}=useContext(Context);
  const handleLogout=()=>{
    dispatch({type:"LOGOUT"});
  }
  return (
    <div className="topbar">
      <div className="topleft">
      <Link to="https://www.linkedin.com/in/divyanshu-watts-016078167/" className='Link'>
        <i className="socialicon fa-brands fa-linkedin-in"></i>
      </Link>
      <Link to="https://github.com/Divyanshu2905" className='Link'>
        <i className="socialicon fa-brands fa-github"></i>
      </Link>
      <Link to="https://www.instagram.com/_div.29/" className='Link'>
        <i className="socialicon fa-brands fa-square-instagram"></i>
      </Link> 
      </div>
      <div className="topcenter">
        <ul className="sections">
            <li className="sec">
            <Link to="/" className="Link">Home</Link></li>
            <li className="sec">
            <Link to="/write" className="Link">Write</Link></li>
            <li className="sec" onClick={handleLogout}>
            {user && "Logout"}</li>
        </ul>
      </div>
      <div className="topright">
        {
          user ?
          (<Link to="/settings"><img className="profileImg" src={user.profilePicture} alt="profile-image"></img></Link>)
          :(<ul className="sections">
              <li className="sec">
              <Link to="/login" className="Link">Login</Link></li>
              <li className="sec">
              <Link to="/register" className="Link">Register</Link></li>
          </ul>)
        }
      </div>
    </div>
  )
}
