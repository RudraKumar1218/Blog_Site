import { useLocation } from "react-router-dom"
import "./singlepost.css"
import { useContext, useEffect,useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import { axiosInstance } from "../../config";

export default function Singlepost() {
  const location=useLocation();
  const path=location.pathname.split("/")[2];
  const [post,setPost]=useState({});
  const {user}=useContext(Context);
  const [title,setTitle]=useState("");
  const [descrip,setdescrip]=useState("");
  const [updateMode, setUpdateMode]=useState(false);
  useEffect(()=>{
    const getPost=async()=>{
      const res=await axiosInstance.get("/posts/"+path);
      setPost(res.data);
      setTitle(res.data.title);
      setdescrip(res.data.descrip);
    }
    getPost();
  },[path])
  const PF="https://blog-backend-r0du.onrender.com/images/";

  const handleDelete=async()=>{
    try{
      await axiosInstance.delete(`/posts/${post._id}`,{
        data:{username:user.username},
      });
      window.location.replace("/");
    }catch(err){}
  }

  const handleUpdate=async()=>{
    try{
      await axiosInstance.put(`/posts/${post._id}`,{
        username:user.username, title:title,descrip:descrip,
      });
      setUpdateMode(false);
    }catch(err){}
  }

  return (
    <div className="singlepost">
      <div className="singlePostWrap">
        {post.photo &&
          <img className="singlePostImg" src={post.photo}></img>
        }{
          updateMode?<input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} className="singlePostTitleInput" autoFocus/>: <h1 className="singlePostTitle">{title}
          {post.username===user?.username && 
            <div className="singlePostEdit"><i className="singlePostIcon fa-regular fa-pen-to-square" onClick={()=>setUpdateMode(true)}></i><i className="singlePostIcon fa-solid fa-trash" onClick={handleDelete}></i></div>
          }
        </h1>
        }
        <div className="singlePostInfo">
            <span className="singlePostAuthor">Author: 
            <Link className="Link" to={`/?user=${post.username}`}><b>{post.username}</b></Link>
            </span>
            <span className="singlePostDate">{new Date(post.createdAt).toDateString()}</span>
        </div>
        {updateMode ? (<textarea className="singlePostDescInput" value={descrip} onChange={(e)=>setdescrip(e.target.value)}/>) :(<p className="singlePostDesc">
        {descrip}
        </p>)} 
        {updateMode && (<button className="singlePostButton" onClick={handleUpdate}>Update</button>)}  
      </div>
    </div>
  )
}
