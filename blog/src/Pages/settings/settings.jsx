import { useContext,useEffect,useState } from "react"
import Sidebar from "../../Components/sidebar/sidebar"
import "./settings.css"
import { Context } from "../../context/Context"
import { axiosInstance } from "../../config";

export default function Settings() {
  const {user,dispatch}=useContext(Context);
  const [file,setFile]=useState(null);
  const [username,setusername]=useState("");
  const [email,setemail]=useState("");
  const [password,setpassword]=useState("");
  const [success,setSuccess]=useState(false);
  const PF="https://blog-backend-r0du.onrender.com/images/"
  
  const handleSubmit=async(e)=>{
    dispatch({type:"UPDATE_START"})
    e.preventDefault();
    const updatedUser={
      userId:user._id,
      username,email,password
    }
    if(file){
      const data= new FormData();
      data.append("file",file)
      data.append("upload_preset","w8o6gy41")
      data.append("cloud_namme","dhvvzezqj")
      await fetch("https://api.cloudinary.com/v1_1/dhvvzezqj/image/upload",{
        method:"post",
        body:data
      }).then((res)=>res.json())
      .then((data)=>{
        updatedUser.profilePicture=data.url;
      }).catch((err)=>{
        console.log(err);
      })
    }
    try{
      const res=await axiosInstance.put("/users/"+user._id,updatedUser);
      setSuccess(true);
      dispatch({type:"UPDATE_SUCCESS", payload:res.data})
    }catch(err){
      console.log(err);
      dispatch({type:"UPDATE_FAILURE"})
    }
  }

  return (
    <div className="settings">
       <div className="settingsWrap">
        <div className="settingsTitle">
            <span className="settingsUpdateTitle">Update Account</span>
        </div>
        <form className="settingsForm" onSubmit={handleSubmit}> 
            <label>Profile Picture</label>
            <div className="settingsPFP">
                <img className="profImg" src={file?URL.createObjectURL(file):user.profilePicture}></img>  
                <label htmlFor="profileInput">
                    <i class="settingsPPIcon fa-regular fa-user"></i>
                </label>
                <input type="file" id="profileInput" style={{display:"none"}} onChange={e=>setFile(e.target.files[0])}></input>
            </div>
            <label>Username</label>
            <input type="text" placeholder={user.username} onChange={e=>setusername(e.target.value)}></input>
            <label>Email</label>
            <input type="email" placeholder={user.email} onChange={e=>setemail(e.target.value)}></input>
            <label>Password</label>
            <input type="password" onChange={e=>setpassword(e.target.value)}></input>
            <button className="settingsSubmit" type="submit">Update</button>
            {success && <span style={{color:"green", textAlign:"center", marginTop:"20px"}}>Profile has been updated</span>}
        </form>
       </div>
       <Sidebar />
    </div>
  )
}
