import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import avtar from "../assets/avrar.jpg";

const Profile = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [imagePreview, setImagePreview] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    setImagePreview(URL.createObjectURL(file));
  }

  const onSubmit = (data) => console.log({ ...data, avatar: selectedFile ? selectedFile.name : "no file selected" });

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#EFF3F6] p-6">
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8 border border-[#4F46E5] flex flex-col gap-5">
        
        <h1 className="text-3xl font-bold text-center text-[#4F46E5]">Profile Details</h1>

        {/* Avatar */}
        <label htmlFor="avatar" className="flex flex-col items-center gap-3 cursor-pointer">
          <input type="file" id="avatar" accept="image/*" {...register('avatar')} onChange={handleImageChange} hidden />
          <img src={imagePreview || avtar} alt="avatar" className="w-20 h-20 rounded-full border-4 border-[#4F46E5] shadow-lg hover:scale-105 transition-transform duration-300 object-cover"/>
          <span className="text-[#4F46E5] font-medium hover:text-[#10B981] transition-colors">Upload Avatar</span>
        </label>

        {/* Full Name */}
        <input type="text" placeholder="Full Name" {...register("fullName", {required:"Full name required"})} 
          className="w-full px-4 py-3 rounded-xl border border-[#6B7280] outline-none focus:ring-2 focus:ring-[#4F46E5]" />
        {errors.fullName && <p className="text-red-600 text-sm">{errors.fullName.message}</p>}

        {/* Bio */}
        <textarea placeholder="Write something about yourself..." {...register("bio")} 
          className="w-full px-4 py-3 rounded-xl border border-[#6B7280] outline-none resize-none h-24 focus:ring-2 focus:ring-[#4F46E5]"/>

        {/* Button */}
        <button className="w-full py-3 rounded-full font-semibold text-white bg-gradient-to-r from-[#4F46E5] to-[#F59E0B] hover:opacity-90 shadow-lg transition-all duration-300">
          Update Profile
        </button>

      </form>
    </div>
  )
}

export default Profile;
