import "./sidebar.css"
import { useState,useEffect } from "react"
import { Link } from "react-router-dom";
import { axiosInstance } from "../../config";
let l=0;
export default function Sidebar() {
     const [cat,setCat]=useState([]);
     useEffect(()=>{
        const getCats=async ()=>{
          const res=await axiosInstance.get("/categories")
          setCat(res.data);
        }
        getCats();
     },[])
  return (
    <div className="sidebar">
       <div className="Itemsside">
          <span className="sideTitle">ABOUT ME</span>
           <img className="aboutimg" src="https://2.img-dpreview.com/files/p/E~C1000x0S4000x4000T1200x1200~articles/3925134721/0266554465.jpeg"></img> 
            <p>
Hello there! I'm <b>Divyanshu Watts</b>, an electrical engineering undergraduate studying at IIT Ropar. However, my passion extends beyond the realm of electrical engineering, as I am striving to become a proficient full-stack developer.</p>
       </div>
       <div className="Itemsside">
            <span className="sideTitle">CATEGORIES</span>
            <ul className="sideList">
               {cat.map((c)=>(
                    <Link className="Link" to={`/?cat=${c.name}`} key={l}>
                    <li className="sideListitem" key={l++}>
                    {c.name}</li></Link>
               ))}
            </ul>
       </div>
       <div className="Itemsside">
            <span className="sideTitle">FOLLOW US</span>
            <div className="sideBarSocial">
            <Link to="https://www.linkedin.com/in/divyanshu-watts-016078167/" className='Link'>
            <i className="sideicon fa-brands fa-linkedin-in"></i>
            </Link>
            <Link to="https://github.com/Divyanshu2905" className='Link'>
            <i className="sideicon fa-brands fa-github"></i>
            </Link>
            <Link to="https://www.instagram.com/_div.29/" className='Link'>
            <i className="sideicon fa-brands fa-square-instagram"></i>
            </Link>      
            </div>
       </div>
    </div>
  )
}
