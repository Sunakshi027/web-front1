import { useEffect, useRef } from "react";
import avtar from "../assets/avrar.jpg";
import arrow from "../assets/arrow icon.jpg";
import { messagesDummyData } from "../assests";
import { formatMessageTime } from "../library/utils";
import galary from "../assets/galary icon1.png";
import send from "../assets/sendmessage.png";
import icom from "../assets/image.png";
import { useNavigate } from "react-router-dom";

const Chat = ({ selectedUser, setSelectedUser,setShowRightSidebar }) => {
  const scrollEnd = useRef();
    const navigate = useNavigate();
  
  // ================= SCROLL TO LAST MESSAGE =================
  useEffect(() => {
    if (scrollEnd.current) {
      scrollEnd.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [messagesDummyData, selectedUser]);

  return selectedUser ? (
    <div className="w-full h-full flex flex-col bg-white overflow-hidden">
       <div
  onClick={() => {
    if (window.innerWidth < 768) {
      setShowRightSidebar(true);
    }
  }}
  className="
    h-[72px]
    flex items-center justify-between
    px-4 sm:px-5
    bg-white
    border-b border-gray-200
    transition-all duration-300
    cursor-pointer
    md:cursor-default
  "
>
  {/* ================= USER INFO ================= */}
  <div className="flex items-center gap-3 min-w-0">

    {/* Profile Image */}
    <div className="relative group flex-shrink-0">

      <img
        src={selectedUser.profilePic}
        alt="profile"
        className="
          w-11 h-11
          rounded-full
          object-cover
          border-2 border-white
          shadow-sm
          transition-all duration-300
          group-hover:scale-105
          group-hover:shadow-md
        "
      />

      {/* Online / Offline Dot */}
      <span
        className={`
          absolute
          bottom-0
          right-0
          w-3.5
          h-3.5
          rounded-full
          border-2
          border-white
          ${
            selectedUser.isOnline
              ? "bg-green-500"
              : "bg-gray-400"
          }
        `}
      ></span>

    </div>

    {/* Name + Status */}
    <div className="min-w-0">

      <p
        className="
          font-semibold
          text-gray-800
          text-sm sm:text-base
          truncate
        "
      >
        {selectedUser.fullName}
      </p>

      <p
        className={`
          text-xs
          font-medium
          ${
            selectedUser.isOnline
              ? "text-green-500"
              : "text-gray-400"
          }
        `}
      >
        {selectedUser.isOnline
          ? "Active now"
          : "Offline"}
      </p>

    </div>

  </div>
        {/* ================= BACK BUTTON ================= */}
        <button
          onClick={() => setSelectedUser(null)}
          className="
            md:hidden
            w-9 h-9
            flex-shrink-0
            rounded-full
            flex items-center justify-center
            hover:bg-gray-100
            transition-all duration-300
            active:scale-90
          "
        >
          <img
            src={arrow}
            alt="back"
            className="
              w-5 h-5
              object-contain
            "
          />
        </button>

      </div>


      {/* ================= MESSAGES ================= */}
      <div
        className="
          flex-1
          px-3 sm:px-4 md:px-6
          py-5
          overflow-y-auto
          bg-[#f8fafc]
          space-y-4
          scrollbar-thin
          scrollbar-thumb-gray-300
          scrollbar-track-transparent
        "
      >

        {messagesDummyData.map((msg, index) => {

          // ================= CHECK MY MESSAGE =================
          const isMe =
            msg.senderId === "680f50e4f10f3cd28382ecf9";

          return (
            <div
              key={index}
              className={`
                flex
                items-end
                gap-2.5
                group
                ${
                  isMe
                    ? "justify-end"
                    : "justify-start"
                }
              `}
            >

              {/* ================= OTHER USER AVATAR ================= */}
              {!isMe && (
                <img
                  src={selectedUser.profilePic}
                  alt=""
                  className="
                    w-8 h-8
                    rounded-full
                    object-cover
                    shadow-sm
                    flex-shrink-0
                    transition-transform duration-300
                    group-hover:scale-105
                  "
                />
              )}


              {/* ================= IMAGE MESSAGE ================= */}
              {msg.image ? (

                <div className="max-w-[220px] sm:max-w-[260px]">

                  <img
                    src={msg.image}
                    alt="message"
                    className="
                      max-w-full
                      rounded-2xl
                      border border-gray-200
                      shadow-sm
                      cursor-pointer
                      transition-all duration-300
                      hover:scale-[1.02]
                      hover:shadow-lg
                    "
                  />

                  <p
                    className={`
                      text-[10px]
                      text-gray-400
                      mt-1
                      ${
                        isMe
                          ? "text-right"
                          : "text-left"
                      }
                    `}
                  >
                    {formatMessageTime(
                      msg.createdAt
                    )}
                  </p>

                </div>

              ) : (

                /* ================= TEXT MESSAGE ================= */
                <div className="max-w-[78%] sm:max-w-[75%] md:max-w-[60%]">

                  <p
                    className={`
                      px-4
                      py-2.5
                      text-sm
                      leading-relaxed
                      break-words
                      shadow-sm
                      transition-all duration-300
                      hover:shadow-md
                      hover:-translate-y-[1px]

                      ${
                        isMe
                          ? `
                            bg-blue-600
                            text-white
                            rounded-2xl
                            rounded-br-sm
                          `
                          : `
                            bg-white
                            text-gray-700
                            border border-gray-200
                            rounded-2xl
                            rounded-bl-sm
                          `
                      }
                    `}
                  >
                    {msg.text}
                  </p>

                  <p
                    className={`
                      text-[10px]
                      text-gray-400
                      mt-1
                      ${
                        isMe
                          ? "text-right"
                          : "text-left"
                      }
                    `}
                  >
                    {formatMessageTime(
                      msg.createdAt
                    )}
                  </p>

                </div>

              )}


              {/* ================= MY AVATAR ================= */}
              {isMe && (
                <img
                  src={avtar}
                  alt=""
                  className="
                    w-8 h-8
                    rounded-full
                    object-cover
                    shadow-sm
                    flex-shrink-0
                    transition-transform duration-300
                    group-hover:scale-105
                  "
                />
              )}

            </div>
          );
        })}

        {/* Scroll Reference */}
        <div ref={scrollEnd}></div>

      </div>


      {/* ================= MESSAGE INPUT ================= */}
      <div
        className="
          relative
          px-3 sm:px-4
          py-3
          bg-white
          border-t border-gray-200
        "
      >

        <div
          className="
            flex
            items-center
            gap-2
            bg-gray-100
            rounded-full
            px-4
            py-1.5
            pr-14
            border border-transparent
            transition-all duration-300
            focus-within:bg-white
            focus-within:border-blue-400
            focus-within:ring-2
            focus-within:ring-blue-100
          "
        >

          {/* ================= INPUT ================= */}
          <input
            type="text"
            placeholder="Write a message..."
            className="
              flex-1
              min-w-0
              bg-transparent
              outline-none
              text-sm
              text-gray-700
              placeholder-gray-400
              py-2
            "
          />


          {/* ================= IMAGE INPUT ================= */}
          <input
            type="file"
            id="image"
            accept="image/*"
            hidden
          />

          <label
            htmlFor="image"
            className="
              w-9 h-9
              flex-shrink-0
              rounded-full
              flex items-center
              justify-center
              cursor-pointer
              transition-all duration-300
              hover:bg-gray-200
              hover:scale-105
              active:scale-90
            "
          >
            <img
              src={galary}
              alt="gallery"
              className="
                w-5 h-5
                object-contain
                opacity-70
              "
            />
            <button className="text-[10px]">Voice</button>
          </label>

        </div>


        {/* ================= SEND BUTTON ================= */}

        <button
          type="button"
          className="
            absolute
            right-5
            bottom-4
            w-11 h-11
            rounded-full
            bg-blue-600
            flex items-center
            justify-center
            shadow-md
            hover:bg-blue-700
            hover:scale-105
            hover:shadow-lg
            active:scale-90
            transition-all duration-300
          "
        >
          <img
            src={send}
            alt="send"
            className="
              w-5 h-5 
              object-contain
            "
          />
        </button>

      </div>

    </div>
  ) : (

    /* ================= EMPTY CHAT ================= */
    <div
      className="
        w-full
        h-full
        flex
        flex-col
        items-center
        justify-center
        bg-[#f8fafc]
        px-6
        text-center
      "
    >

      <div
        className="
          w-24 h-24 sm:w-28 sm:h-28
          rounded-full
          bg-white
          flex items-center justify-center
          shadow-sm
          border border-gray-100
          mb-5
          transition-all duration-500
          hover:scale-105
          hover:shadow-md
        "
      >

        <img
          src={icom}
          alt=""
          className="
            w-16 h-16 sm:w-20 sm:h-20
            object-contain
            transition-transform duration-500
            hover:scale-110
          "
        />

      </div>


      <h2
        className="
          text-lg sm:text-xl
          font-semibold
          text-gray-800
          mb-2
        "
      >
        Welcome to WebChat
      </h2>


      <p
        className="
          text-sm
          text-gray-500
          max-w-sm
          leading-relaxed
        "
      >
        Select a conversation from the sidebar
        to start chatting with your friends.
      </p>

    </div>
  );
};

export default Chat;