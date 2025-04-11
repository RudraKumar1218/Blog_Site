import Sidebar from "../../Components/sidebar/sidebar"
import Singlepost from "../../Components/singlepost/singlepost"
import "./single.css"

export default function Single() {
  return (
    <div className="single"> 
      <Singlepost />
      <Sidebar />       
    </div>
  )
}
