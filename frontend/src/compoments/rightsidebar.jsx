import React from "react";
import dummy from "../assets/avrar.jpg";
import { imagesDummyData } from '../assests';
import { useNavigate } from "react-router-dom";

const Rightsidebar = ({ selectedUser }) => {
  const navigate = useNavigate();
  if (!selectedUser) return null;

  return (
    <div className="w-full max-md:hidden h-full bg-white rounded-2xl shadow-lg p-6 overflow-y-auto">
      
      {/* Profile */}
      <div className="flex flex-col items-center gap-4 mb-8">
        <img src={selectedUser.profilePic || dummy} alt="profile" className="w-28 h-28 rounded-full shadow-lg object-cover"/>
        <h1 className="text-2xl font-bold text-[#6C63FF]">{selectedUser.fullName}</h1>
        <p className="text-[#757575] text-center">{selectedUser.bio || "No bio available"}</p>
      </div>

      {/* Media */}
      <div className="mb-8">
        <h2 className="text-lg font-bold text-[#6C63FF] mb-4 border-b border-gray-200 pb-2">Media</h2>
        <div className="grid grid-cols-2 gap-4 max-h-64 overflow-y-auto">
          {imagesDummyData.map((url, index) => (
            <div key={index} onClick={() => window.open(url)} className="cursor-pointer rounded-lg overflow-hidden shadow hover:scale-105 transition-transform duration-300">
              <img src={url} alt="" className="w-full h-full object-cover"/>
            </div>
          ))}
        </div>
      </div>

      {/* Logout */}
      <button onClick={() => navigate("/login")} className="w-full py-3 rounded-full font-semibold text-white bg-gradient-to-r from-[#6C63FF] to-[#FF6584] hover:opacity-90 shadow-lg transition-all duration-300">
        Logout
      </button>
    </div>
  );
};

export default Rightsidebar;
