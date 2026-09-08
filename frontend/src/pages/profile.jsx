import React, { useState } from "react";
import { useForm } from "react-hook-form";
import avtar from "../assets/avrar.jpg";

const Profile = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [imagePreview, setImagePreview] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setSelectedFile(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const onSubmit = (data) => {
    console.log({
      ...data,
      avatar: selectedFile ? selectedFile.name : "no file selected",
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-5">

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="
          w-full max-w-md
          bg-white
          rounded-2xl
          border border-gray-200
          shadow-lg
          p-6 sm:p-8
          transition-all duration-300
          hover:shadow-xl
        "
      >

        {/* Heading */}
        <div className="text-center mb-7">
          <h1 className="text-2xl font-semibold text-gray-800">
            Profile Details
          </h1>

          <p className="text-sm text-gray-500 mt-1">
            Update your profile information
          </p>
        </div>

        {/* Avatar */}
        <label
          htmlFor="avatar"
          className="flex flex-col items-center mb-7 cursor-pointer group"
        >
          <input
            type="file"
            id="avatar"
            accept="image/*"
            {...register("avatar")}
            onChange={handleImageChange}
            hidden
          />

          <div
            className="
              relative
              w-24 h-24
              rounded-full
              overflow-hidden
              border-2 border-gray-200
              transition-all duration-300
              group-hover:border-blue-500
              group-hover:scale-105
            "
          >
            <img
              src={imagePreview || avtar}
              alt="avatar"
              className="
                w-full h-full
                object-cover
                transition-transform duration-300
                group-hover:scale-110
              "
            />

            {/* Hover Overlay */}
            <div
              className="
                absolute inset-0
                bg-black/40
                opacity-0
                group-hover:opacity-100
                flex items-center justify-center
                transition-all duration-300
              "
            >
              <span className="text-white text-xs font-medium">
                Change
              </span>
            </div>
          </div>

          <span
            className="
              mt-3
              text-sm
              text-blue-600
              font-medium
              transition-colors duration-200
              group-hover:text-blue-700
            "
          >
            Change profile picture
          </span>
        </label>

        {/* Full Name */}
        <div className="mb-5">
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Full Name
          </label>

          <input
            type="text"
            placeholder="Enter your full name"
            {...register("fullName", {
              required: "Full name is required",
            })}
            className="
              w-full
              px-4 py-3
              rounded-lg
              border border-gray-300
              bg-white
              text-sm text-gray-700
              outline-none
              placeholder:text-gray-400
              transition-all duration-300
              hover:border-gray-400
              focus:border-blue-500
              focus:ring-2
              focus:ring-blue-100
            "
          />

          {errors.fullName && (
            <p className="text-red-500 text-xs mt-1.5">
              {errors.fullName.message}
            </p>
          )}
        </div>

        {/* Bio */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Bio
          </label>

          <textarea
            placeholder="Write something about yourself..."
            {...register("bio")}
            className="
              w-full
              h-28
              px-4 py-3
              rounded-lg
              border border-gray-300
              bg-white
              text-sm text-gray-700
              outline-none
              resize-none
              placeholder:text-gray-400
              transition-all duration-300
              hover:border-gray-400
              focus:border-blue-500
              focus:ring-2
              focus:ring-blue-100
            "
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          className="
            w-full
            py-3
            rounded-lg
            bg-blue-600
            text-white
            text-sm
            font-semibold
            shadow-sm
            transition-all duration-300
            hover:bg-blue-700
            hover:shadow-md
            hover:-translate-y-0.5
            active:translate-y-0
            active:scale-[0.98]
          "
        >
          Update Profile
        </button>

      </form>
    </div>
  );
};

export default Profile;