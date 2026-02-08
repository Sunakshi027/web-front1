import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from "../assets/image.png";
import menu from '../assets/menu.png';
import search from "../assets/searchbar11.webp";
import avtar from '../assets/avrar.jpg';
import { userDummyData } from '../assests';

const Sidebar = ({ selectedUser, setSelectedUser }) => {
  const navigate = useNavigate();

  return (
    <div className="h-full w-full p-5 bg-white rounded-2xl shadow-lg overflow-y-auto">
      
      {/* Logo & Menu */}
      <div className="flex items-center justify-between mb-6">
        <img src={logo} alt="logo" className="w-20 h-auto" />
        <div className="relative group">
          <img src={menu} alt="menu" className="w-8 h-8 p-1 rounded-full cursor-pointer bg-[#6C63FF] hover:bg-[#FF6584] transition-all duration-300"/>
          <div className="absolute top-full right-0 w-36 bg-white border border-gray-200 rounded-lg shadow-md p-3 hidden group-hover:block z-50">
            <p className="cursor-pointer text-sm py-1 hover:text-[#6C63FF]" onClick={() => navigate("/profile")}>Edit Profile</p>
            <hr className="border-gray-300 my-2"/>
            <p className="cursor-pointer text-sm py-1 hover:text-[#FF6584]" onClick={() => navigate("/login")}>Log out</p>
          </div>
        </div>
      </div>

      {/* Search */}
      <div className="flex items-center gap-3 bg-gray-100 rounded-full p-2 mb-5">
        <img src={search} alt="search" className="w-5 h-5"/>
        <input type="text" placeholder="Search User..." className="bg-transparent outline-none text-[#2E2E2E] placeholder-[#757575] text-sm flex-1"/>
      </div>

      {/* User List */}
      <div className="flex flex-col gap-3">
        {userDummyData.map((user, index) => {
          const isSelected = selectedUser?.id === user.id;
          return (
            <div key={index} onClick={() => setSelectedUser(user)} 
              className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all duration-300 ${
                isSelected ? 'bg-[#6C63FF] text-white shadow-lg' : 'bg-gray-50 hover:bg-gray-100 text-[#2E2E2E]'
              }`}>
              <img src={user.profilePic || avtar} alt="avatar" className="w-12 h-12 rounded-full object-cover border-2 border-[#6C63FF]"/>
              <div className="flex flex-col">
                <p className="font-medium">{user.fullName}</p>
                <span className={`text-xs font-semibold ${index < 3 ? 'text-green-500' : 'text-red-500'}`}>
                  {index < 3 ? 'Online' : 'Offline'}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
