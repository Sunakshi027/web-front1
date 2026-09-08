import React, { useState, useEffect } from "react";
import Sidebar from "../compoments/sidebar";
import Chat from "../compoments/chat";
import Rightsidebar from "../compoments/rightsidebar";
import { useNavigate } from "react-router-dom";
import { authCheck } from "./auth";

const Home = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [showRightSidebar, setShowRightSidebar] = useState(true);

  const navigate = useNavigate();

  // 🔐 AUTH CHECK
  useEffect(() => {
    authCheck()
      .then(() => console.log("User authenticated"))
      .catch(() => {
        localStorage.removeItem("token");
        navigate("/");
      });
  }, [navigate]);

  return (
    <div className="w-full min-h-screen bg-gray-100 flex items-center justify-center">

      <div
        className="
          w-full
          h-screen
          bg-white
          overflow-hidden

          md:m-3
          md:h-[calc(100vh-24px)]
          md:rounded-2xl
          md:border
          md:border-gray-200
          md:shadow-lg

          xl:max-w-[1500px]

          grid
          grid-cols-1
          md:grid-cols-[260px_1fr]
          xl:grid-cols-[280px_1fr_280px]
        "
      >

        {/* ================= SIDEBAR ================= */}
        <div
          className={`
            bg-white
            border-r
            border-gray-200
            overflow-hidden
            min-w-0

            ${selectedUser ? "hidden md:block" : "block"}
          `}
        >
          <Sidebar
            selectedUser={selectedUser}
            setSelectedUser={setSelectedUser}
          />
        </div>


        {/* ================= CHAT ================= */}
        <div
          className={`
            bg-white
            overflow-hidden
            min-w-0
            h-full

            ${selectedUser ? "block" : "hidden md:block"}
          `}
        >
         <Chat
  selectedUser={selectedUser}
  setSelectedUser={setSelectedUser}
  setShowRightSidebar={setShowRightSidebar}
/>
        </div>


        {/* ================= RIGHT SIDEBAR ================= */}
        {selectedUser && (
          <div
            className="
              hidden
              xl:block
              bg-gray-50
              border-l
              border-gray-200
              overflow-hidden
              min-w-0
            "
          >
           {showRightSidebar && (
  <Rightsidebar
    selectedUser={selectedUser}
  />
)}
          </div>
        )}

      </div>
    </div>
  );
};

export default Home;