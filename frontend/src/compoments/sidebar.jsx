import React from 'react';
import { useNavigate } from 'react-router-dom';
import Rightsidebar from './rightsidebar';
import logo from "../assets/image.png";
import menu from '../assets/menu.png';
import search from "../assets/searchbar11.webp";
import avtar from '../assets/avrar.jpg';
import { userDummyData } from '../assests';

const Sidebar = ({ selectedUser, setSelectedUser }) => {
  const navigate = useNavigate();

  return (
    <div className="
      h-full
      w-full
      bg-white
      flex flex-col
      overflow-hidden
    ">

      {/* ================= HEADER ================= */}
      <div className="
        flex
        items-center
        justify-between
        px-5
        py-4
        border-b border-gray-200
      ">

        {/* Logo */}
       <div className=''>
         <img
          src={logo}
          alt="logo"
          className="
            w-23
            h-auto
            object-contain
            transition-transform duration-300
            hover:scale-105
          "
        />

        <h4 className='text-[20px] font-bold text-center text-gray-600'>Chats</h4>
       </div>
         
        {/* Menu */}
        <div className="relative group">

          <button className="
            w-12 h-12
            rounded-full
            flex items-center justify-center
            bg-gray-100
            hover:bg-gray-200
            transition-all duration-300
            active:scale-90
          ">
            <img
              src={menu}
              alt="menu"
              className="w-8 h-8 object-contain"
            />
          </button>

          {/* Dropdown */}
          <div className="
            absolute
            right-0
            top-11
            w-40
            bg-white
            border border-gray-200
            rounded-xl
            shadow-xl
            p-2
            hidden
            group-hover:block
            z-50
          ">

            <button
              onClick={() => navigate("/profile")}
              className="
                w-full
                text-left
                px-3
                py-2.5
                text-sm
                text-gray-700
                rounded-lg
                hover:bg-gray-100
                hover:text-blue-600
                transition-all duration-200
              "
            >
              Edit Profile
            </button>

            <div className="h-px bg-gray-100 my-1"></div>

            <button
              onClick={() => {
                localStorage.removeItem("token");
                navigate("/login");
              }}
              className="
                w-full
                text-left
                px-3
                py-2.5
                text-sm
                text-red-500
                rounded-lg
                hover:bg-red-50
                transition-all duration-200
              "
            >
              Log out
            </button>

          </div>

        </div>

      </div>


      {/* ================= SEARCH ================= */}
      <div className="px-5 pt-5 pb-3">

        <div className="
          flex
          items-center
          gap-3
          px-4
          py-2.5
          bg-gray-100
          rounded-xl
          border border-transparent
          transition-all duration-300
          focus-within:bg-white
          focus-within:border-blue-400
          focus-within:ring-2
          focus-within:ring-blue-100
        ">

          <img
            src={search}
            alt="search"
            className="
              w-5 h-5
              object-contain
              opacity-60
            "
          />

          <input
            type="text"
            placeholder="Search conversations"
            className="
              flex-1
              bg-transparent
              outline-none
              text-sm
              text-gray-700
              placeholder-gray-400
            "
          />

        </div>

      </div>


      {/* ================= USER LIST ================= */}
      <div className="
        flex-1
        overflow-y-auto
        px-3
        pb-4
      ">

        <p className="
          px-2
          py-2
          text-xs
          font-semibold
          uppercase
          tracking-wider
          text-gray-400
        ">
          Users
        </p>

        <div className="flex flex-col gap-1">

          {userDummyData.map((user, index) => {

            const isSelected = selectedUser?.id === user.id;
            const isOnline = index < 4;

            return (

              <div
                key={index}
                onClick={() => setSelectedUser(user)}
                className={`
                  relative
                  flex
                  items-center
                  gap-3
                  px-3
                  py-3
                  rounded-xl
                  cursor-pointer
                  group
                  transition-all
                  duration-300

                  ${
                    isSelected
                      ? `
                        bg-blue-50
                        border border-blue-100
                      `
                      : `
                        border border-transparent
                        hover:bg-gray-50
                        hover:border-gray-100
                      `
                  }
                `}
              >

                {/* Active indicator */}
                {isSelected && (
                  <span className="
                    absolute
                    left-0
                    top-1/2
                    -translate-y-1/2
                    w-1
                    h-8
                    bg-blue-600
                    rounded-r-full
                  "></span>
                )}


                {/* Avatar */}
                <div className="
                  relative
                  flex-shrink-0
                ">

                  <img
                    src={user.profilePic || avtar}
                    alt="avatar"
                    className={`
                      w-14
                      h-14
                      rounded-full
                      object-cover
                      transition-all
                      duration-300

                      ${
                        isSelected
                          ? "ring-2 ring-blue-500 ring-offset-2"
                          : "group-hover:scale-105"
                      }
                    `}
                  />

                  {/* Online Dot */}
                  <span
                    className={`
                      absolute
                      bottom-0
                      right-0
                      w-3
                      h-3
                      rounded-full
                      border-2
                      border-white

                      ${
                        isOnline
                          ? "bg-green-500"
                          : "bg-gray-400"
                      }
                    `}
                  ></span>

                </div>


                {/* User Info */}
                <div className="min-w-0 flex-1">

                  <div className="flex items-center justify-between gap-2">

                    <p
                      className={`
                        font-medium
                        text-sm
                        truncate
                        transition-colors
                        duration-300

                        ${
                          isSelected
                            ? "text-blue-700"
                            : "text-gray-800 group-hover:text-blue-600"
                        }
                      `}
                    >
                      {user.fullName}
                    </p>

                  <div className='flex flex-col'>
                        <span className="
                      text-[10px]
                      text-gray-400
                      flex-shrink-0
                    ">
                      10:30
                    </span>
                    <span className="text-[11px] text-gray-500 font-medium">
  {user.unread}
</span>
                    </div>
                    

                  </div>


                  <p
                    className={`
                      text-xs
                      mt-1
                      transition-colors
                      duration-300

                      ${
                        isOnline
                          ? "text-green-500"
                          : "text-gray-400"
                      }
                    `}
                  >
                    {isOnline ? "Online" : "Offline"}
                  </p>

                </div>

              </div>

            );
          })}

        </div>

      </div>

    </div>
  );
};

export default Sidebar;

