import "./post.css"
import { Link } from "react-router-dom";
let j=0;
export default function Post(post) {
  const PF="https://blog-backend-r0du.onrender.com/images/";
  return (
    <div className="post">
      {post.post.photo && (
      <img className="postImg" src={post.post.photo} alt="image"></img>)}
        <div className="postInfo">
            <div className="postCats">
                {post.post.categories.map((c)=>(
                  <span className="cat" key={j++}>{c}</span>
                ))}       
            </div>
            <Link to={`/post/${post.post._id}`} className="Link">
            <span className="postTitle">{post.post.title}</span>
            </Link>
            <hr/>
            <span className="postDate">{new Date(post.post.createdAt).toDateString()}</span>
        </div>
        <p className="postDesc">{post.post.descrip}</p>
    </div>
  )
}
