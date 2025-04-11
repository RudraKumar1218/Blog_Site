import { useContext, useState } from "react"
import "./write.css"
import { Context } from "../../context/Context";
import { axiosInstance } from "../../config";


export default function Write() {
  const [title,setTitle]=useState("");
  const [desc,setDesc]=useState("");
  const [file,setFile]=useState(null);
  const [categories,setcategories]=useState([]);
  const {user}=useContext(Context);
  const handleSubmit=async(e)=>{
    e.preventDefault();
    const newPost={
      username:user.username,
      title,
      descrip:desc,
      categories,
    }
    if(file){
      console.log(file);
      const data= new FormData();
      data.append("file",file)
      data.append("upload_preset","w8o6gy41")
      data.append("cloud_namme","dhvvzezqj")
      await fetch("https://api.cloudinary.com/v1_1/dhvvzezqj/image/upload",{
        method:"post",
        body:data
      }).then((res)=>res.json())
      .then((data)=>{
        newPost.photo=data.url;
      }).catch((err)=>{
        console.log(err);
      })
    }
    const category={
      name:categories[0],
    }
    let flag=0;
    const met=await axiosInstance.get("/categories")
    const cat=met.data;
    cat.map((c)=>{
      if(c.name===categories[0]){
        flag=1;
      }
    })
    if(flag===0){
      try{
        await axiosInstance.post("/categories",category);
      }catch(err){}
    }
    try{
      const res=await axiosInstance.post("/posts",newPost);
      window.location.replace(`/post/${res.data._id}`);
    }catch(err){}
  }

  return (
    <div className="write">
      {file && (
        <img className="formImg" src={URL.createObjectURL(file)} alt="chooseImage"></img>
      )}  
      <form className="writeForm" onSubmit={handleSubmit}>
        <div className="writeFormGroup">
            <label htmlFor="fileInput">
            <i className="writeIcon fa-solid fa-plus"></i>
            </label>
            <input type="file" id="fileInput" style={{display:"none"}} onChange={e=>setFile(e.target.files[0])}></input>
            <input type="text" placeholder="title" className="writeInput" autoFocus={true} onChange={e=>setTitle(e.target.value)}></input>
        </div>
        <div className="writeFormGroup">
            <textarea placeholder="What's in your mind" type="text" className="writeInput writeText" onChange={e=>setDesc(e.target.value)}></textarea>
        </div>
          <input type="text" placeholder="Category" className="category" onChange={e=>setcategories([e.target.value])}></input>
        <button className="writeSubmit" type="submit">Post</button>
      </form>
    </div>
  )
}
