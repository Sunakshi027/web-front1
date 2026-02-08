import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const Login = () => {
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#4F46E5] via-[#10B981] to-[#F59E0B] p-6">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8 border border-[#4F46E5]">
        <h2 className="text-3xl font-bold text-center text-[#4F46E5] mb-6">
          {isLogin ? "Create Account" : "Welcome Back"}
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {isLogin && (
            <input
              type="text"
              {...register("fullName",{required:true})}
              placeholder="Full Name"
              className="w-full px-4 py-3 rounded-xl border border-[#6B7280] outline-none focus:ring-2 focus:ring-[#4F46E5]"
            />
          )}

          <input
            type="email"
            {...register("email",{required:true})}
            placeholder="Email"
            className="w-full px-4 py-3 rounded-xl border border-[#6B7280] outline-none focus:ring-2 focus:ring-[#4F46E5]"
          />

          <input
            type="password"
            {...register("password",{required:true})}
            placeholder="Password"
            className="w-full px-4 py-3 rounded-xl border border-[#6B7280] outline-none focus:ring-2 focus:ring-[#4F46E5]"
          />

          <button
            type="submit"
            className="w-full py-3 rounded-full font-semibold text-white bg-gradient-to-r from-[#4F46E5] to-[#F59E0B] hover:opacity-90 shadow-lg transition-all duration-300"
          >
            {isLogin ? "Sign Up" : "Login"}
          </button>
        </form>

        <p className="text-center text-[#6B7280] mt-6">
          {isLogin ? "Already have an account?" : "Don't have an account?"}
          <span
            className="ml-2 text-[#4F46E5] font-medium cursor-pointer hover:underline"
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? "Login" : "Sign Up"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
