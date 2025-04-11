import React, { useContext } from 'react'
import Top from "./Components/topbar/top";
import Home from "./Pages/Homepage/home"
import Single from './Pages/single/single';
import Write from './Pages/Write/write';
import Settings from './Pages/settings/settings';
import Login from './Pages/login/login';
import Register from './Pages/register/register';
import { BrowserRouter as Router,
        Routes,Route,Link } from 'react-router-dom';
import { Context } from './context/Context';
function App() {
  const {user}=useContext(Context);
  return (
    <Router>
      <Top/>
       <Routes>
          <Route path="/" element={<><Home/></>} />
          <Route path="/register" element={user?<><Home/></>:<Register/>} />
          <Route path="/login" element={user?<><Home/></>:<Login />} />
          <Route path="/write" element={user?<><Write/></>:<Register/>} />
          <Route path="/post/:postId" element={<><Single/></>} />
          <Route path="/settings" element={user?<><Settings/></>:<Register />} />
       </Routes>
    </Router>
  );
}

export default App;
