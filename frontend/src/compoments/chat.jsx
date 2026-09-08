
import { useEffect, useRef } from 'react';
import avtar from '../assets/avrar.jpg';
import arrow from "../assets/arrow icon.jpg";
import photo1 from '../assets/hazel.jpg';
import { messagesDummyData } from '../assests';
import { formatMessageTime } from '../library/utils';
import galary from '../assets/galary icon1.png';
import send from '../assets/sendmessage.png';
import icom from '../assets/image.png';

const Chat = ({ selectedUser, setSelectedUser }) => {
  const scrollEnd = useRef();

  useEffect(() => {
    if (scrollEnd.current) {
      scrollEnd.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messagesDummyData, selectedUser]);

  return selectedUser ? (
    <div className="w-full h-full flex flex-col bg-white overflow-hidden">

      {/* ================= HEADER ================= */}
      <div className="
        h-[72px]
        flex items-center justify-between
        px-5
        bg-white
        border-b border-gray-200
        transition-all duration-300
      ">

        <div className="flex items-center gap-3">

          {/* Profile Image */}
          <div className="relative group">

            <img
              src={photo1}
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

            {/* Online dot */}
            <span className="
              absolute
              bottom-0
              right-0
              w-3.5 h-3.5
              bg-green-500
              border-2 border-white
              rounded-full
            "></span>

          </div>

          {/* User Info */}
          <div>
            <p className="
              font-semibold
              text-gray-800
              text-base
              transition-colors duration-300
              hover:text-blue-600
            ">
              Hazel
            </p>

            <p className="text-xs text-green-500 font-medium">
              Active now
            </p>
          </div>

        </div>

        {/* Back Button */}
        <button
          onClick={() => setSelectedUser(null)}
          className="
            md:hidden
            w-9 h-9
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
            className="w-5 h-5 object-contain"
          />
        </button>

      </div>


      {/* ================= MESSAGES ================= */}
      <div className="
        flex-1
        px-4 md:px-6
        py-5
        overflow-y-auto
        bg-[#f8fafc]
        space-y-4
        scrollbar-thin
        scrollbar-thumb-gray-300
        scrollbar-track-transparent
      ">

        {messagesDummyData.map((msg, index) => {

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
                ${isMe ? "justify-end" : "justify-start"}
              `}
            >

              {/* Other User Avatar */}
              {!isMe && (
                <img
                  src={photo1}
                  alt=""
                  className="
                    w-8 h-8
                    rounded-full
                    object-cover
                    shadow-sm
                    transition-transform duration-300
                    group-hover:scale-105
                  "
                />
              )}

              {/* Message */}
              {msg.image ? (

                <div className="max-w-[260px]">

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

                  <p className={`
                    text-[10px]
                    text-gray-400
                    mt-1
                    ${isMe ? "text-right" : "text-left"}
                  `}>
                    {formatMessageTime(msg.createdAt)}
                  </p>

                </div>

              ) : (

                <div className="max-w-[75%] md:max-w-[60%]">

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
                      ${isMe ? "text-right" : "text-left"}
                    `}
                  >
                    {formatMessageTime(msg.createdAt)}
                  </p>

                </div>

              )}

              {/* My Avatar */}
              {isMe && (
                <img
                  src={avtar}
                  alt=""
                  className="
                    w-8 h-8
                    rounded-full
                    object-cover
                    shadow-sm
                    transition-transform duration-300
                    group-hover:scale-105
                  "
                />
              )}

            </div>
          );
        })}

        <div ref={scrollEnd}></div>

      </div>


      {/* ================= MESSAGE INPUT ================= */}
      <div className="
        px-4
        py-3
        bg-white
        border-t border-gray-200
      ">

        <div className="
          flex
          items-center
          gap-2
          bg-gray-100
          rounded-full
          px-4
          py-1.5
          border border-transparent
          transition-all duration-300
          focus-within:bg-white
          focus-within:border-blue-400
          focus-within:ring-2
          focus-within:ring-blue-100
        ">

          {/* Input */}
          <input
            type="text"
            placeholder="Write a message..."
            className="
              flex-1
              bg-transparent
              outline-none
              text-sm
              text-gray-700
              placeholder-gray-400
              py-2
            "
          />

          {/* Gallery */}
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
              className="w-5 h-5 object-contain opacity-70"
            />
          </label>

        </div>

        {/* Send Button */}
        <button
          className="
            absolute
            right-7
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
              transition-transform duration-300
              group-hover:translate-x-0.5
            "
          />
        </button>

      </div>

    </div>
  ) : (

    /* ================= EMPTY CHAT ================= */
    <div className="
      w-full
      h-full
      flex
      flex-col
      items-center
      justify-center
      bg-[#f8fafc]
      px-6
      text-center
    ">

      <div className="
        w-28 h-28
        rounded-full
        bg-white
        flex items-center justify-center
        shadow-sm
        border border-gray-100
        mb-5
        transition-all duration-500
        hover:scale-105
        hover:shadow-md
      ">

        <img
          src={icom}
          alt=""
          className="
            w-20 h-20
            object-contain
            transition-transform duration-500
            hover:scale-110
          "
        />

      </div>

      <h2 className="
        text-xl
        font-semibold
        text-gray-800
        mb-2
      ">
        Welcome to WebChat
      </h2>

      <p className="
        text-sm
        text-gray-500
        max-w-sm
        leading-relaxed
      ">
        Select a conversation from the sidebar to start chatting with your friends.
      </p>

    </div>
  );
};

export default Chat;

