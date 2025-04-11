import Post from "../post/post"
import "./posts.css"
let i=0;
export default function Posts({posts}) {
  return (
    <div className="posts">
      {posts.map((post)=>(
        <Post post={post} key={i++}/>
      ))}
    </div>
  )
}
