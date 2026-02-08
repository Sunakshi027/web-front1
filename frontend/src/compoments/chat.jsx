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
    if (scrollEnd.current) scrollEnd.current.scrollIntoView({ behavior: "smooth" });
  }, [messagesDummyData, selectedUser]);

  return selectedUser ? (
    <div className="w-full h-full flex flex-col bg-gray-100 rounded-xl shadow-lg overflow-hidden">

      {/* Header */}
      <div className="flex items-center justify-between px-5 py-3 bg-white shadow-md rounded-b-xl">
        <div className="flex items-center gap-3">
          <img src={photo1} alt="profile" className="w-12 h-12 rounded-full object-cover shadow"/>
          <div>
            <p className="font-semibold text-lg text-[#6C63FF] flex items-center gap-2">
              Hazel
              <span className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></span>
            </p>
            <p className="text-sm text-[#757575]">Online</p>
          </div>
        </div>
        <img onClick={() => setSelectedUser(null)} src={arrow} alt="back" className="md:hidden w-7 h-7 cursor-pointer"/>
      </div>

      {/* Chat */}
      <div className="flex-1 p-4 overflow-y-auto space-y-4">
        {messagesDummyData.map((msg, index) => (
          <div key={index} className={`flex items-end gap-3 ${msg.senderId !== "680f50e4f10f3cd28382ecf9" ? "justify-start" : "justify-end"}`}>
            {msg.senderId !== "680f50e4f10f3cd28382ecf9" && <img src={photo1} alt="" className="w-9 h-9 rounded-full"/>}
            {msg.image ? (
              <img src={msg.image} alt="" className="max-w-[250px] rounded-xl shadow border border-gray-300"/>
            ) : (
              <p className={`p-3 rounded-xl break-words max-w-[200px] text-sm ${msg.senderId !== "680f50e4f10f3cd28382ecf9" ? "bg-gray-200 text-[#2E2E2E] rounded-tr-none" : "bg-[#6C63FF] text-white rounded-tl-none"}`}>
                {msg.text}
              </p>
            )}
            {msg.senderId === "680f50e4f10f3cd28382ecf9" && <img src={avtar} alt="" className="w-9 h-9 rounded-full"/>}
          </div>
        ))}
        <div ref={scrollEnd}></div>
      </div>

      {/* Input */}
      <div className="flex items-center gap-3 p-4 bg-white rounded-t-xl shadow-inner">
        <div className="flex-1 flex items-center gap-2 bg-gray-200 rounded-full px-4 py-2">
          <input type="text" placeholder="Send a message" className="flex-1 bg-transparent text-[#2E2E2E] placeholder-[#757575] outline-none"/>
          <input type="file" id="image" accept="image/*" hidden/>
          <label htmlFor="image" className="cursor-pointer">
            <img src={galary} alt="" className="w-8 h-8"/>
          </label>
        </div>
        <button className="w-10 h-10 bg-[#6C63FF] hover:bg-[#FF6584] rounded-full flex items-center justify-center shadow-lg transition-all duration-300">
          <img src={send} alt="send" className="w-5 h-5"/>
        </button>
      </div>

    </div>
  ) : (
    <div className="flex flex-col items-center justify-center h-full gap-4 bg-gray-100 rounded-xl shadow-lg p-6">
      <img src={icom} alt="" className="w-32 h-32 object-contain"/>
      <p className="text-center text-[#6C63FF] font-medium text-lg">Stay connected with your friends & family from anywhere</p>
    </div>
  );
};

export default Chat;
