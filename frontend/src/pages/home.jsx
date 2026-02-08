import React, { useState, useEffect } from 'react';
import Sidebar from '../compoments/sidebar';
import Chat from '../compoments/chat';
import Rightsidebar from '../compoments/rightsidebar';
import { useNavigate } from 'react-router-dom';
import { authCheck } from './auth';

const Home = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const navigate = useNavigate();

  // 🔐 AUTH CHECK
  useEffect(() => {
    authCheck()
      .then(() => console.log("User authenticated"))
      .catch(() => {
        localStorage.removeItem("token");
        navigate("/");
      });
  }, []);

  return (
    <div className="w-full h-screen bg-gradient-to-br from-[#355C7D] to-[#6C5B7B] flex justify-center items-center p-4">
      
      <div className="w-full max-w-[1400px] h-full rounded-3xl shadow-2xl bg-gradient-to-br from-[#F8B195] via-[#F67280] to-[#C06C84] overflow-hidden grid
        grid-cols-1
        md:grid-cols-[1fr_1.5fr]
        xl:grid-cols-[1fr_2fr_1fr]
        gap-4
        transition-all duration-500">

        {/* Sidebar */}
        <div className="bg-gradient-to-b from-[#F8B195] via-[#F67280] to-[#C06C84] shadow-inner rounded-l-3xl overflow-hidden border-r border-[#C06C84]">
          <Sidebar selectedUser={selectedUser} setSelectedUser={setSelectedUser} />
        </div>

        {/* Chat */}
        <div className="bg-gradient-to-b from-[#F8B195] via-[#F67280] to-[#C06C84] shadow-inner overflow-hidden rounded-none border-x border-[#C06C84]">
          <Chat selectedUser={selectedUser} setSelectedUser={setSelectedUser} />
        </div>

        {/* Right Sidebar */}
        {selectedUser && (
          <div className="bg-gradient-to-b from-[#C06C84] via-[#6C5B7B] to-[#355C7D] shadow-inner rounded-r-3xl overflow-hidden border-l border-[#355C7D]">
            <Rightsidebar selectedUser={selectedUser} setSelectedUser={setSelectedUser} />
          </div>
        )}

      </div>
    </div>
  );
};

export default Home;
