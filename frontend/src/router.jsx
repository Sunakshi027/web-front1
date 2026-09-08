import { Routes,Route,BrowserRouter,Outlet } from "react-router-dom";
import React from 'react'
import Home from './pages/home';
import Login from './pages/login';
import Profile from './pages/profile';
const Router=() =>{
  return (
    <div>
    
       <Routes>

      <Route path="/" element={<Home/>}/>
      <Route path="profile" element={<Profile/>}/>
      <Route path="login" element={<Login/>}/>
       </Routes>


    </div>
  )
}

export default Router
