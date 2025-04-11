import { useState } from "react"
import Header from "../../Components/header/header"
import Sidebar from "../../Components/sidebar/sidebar"
import Posts from "../../Components/posts/posts"
import "./home.css"
import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import { axiosInstance } from "../../config"

export default function Home() {
  const [posts,setPosts]=useState([]);
  const {search, ...others}=useLocation();
  useEffect(()=>{
    const fetchPosts=async()=>{
       const res=await axiosInstance.get("/posts"+search)
       setPosts(res.data);
    }
    fetchPosts();
  },[search]);
  return (
      <>
      <Header />
      <div className="home">  
        <Posts posts={posts}/>
        <Sidebar />
      </div>
      </>
  )
}
