"use client";
import Image from "next/image";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
const page = () => {
  const [showPassword, setPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const HandlePassword = () => {
    setPassword(!showPassword);
  };

  const HandleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const isFormValid = formData.email && formData.password;

  return (
    <section className="w-full">
      <div className="max-w-[1440px] mx-auto flex items-center justify-center py-[15px] px-4 sm:px-6 md:px-12 lg:px-24">
        
        <div className="w-full max-w-[644px] shadow-lg  md:p-10 p-5 bg-[#FFFFFF] border border-[#cac9c9] rounded-[16px]">
          
          <div className="flex flex-col gap-2">
            <h1 className="font-poppins md:text-[32px] text-[26px] text-[#333333]">
              Log in to your  account
            </h1>

            <p className="text-[#666666] font-poppins md:text-[16px] text-[14px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.
            </p>

            <label className="text-[#666666] font-poppins text-[16px] p-1">
              Email address
            </label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={HandleChange}
              placeholder="Enter your email"
              className="w-full border border-[#cac9c9] rounded-[12px] px-5 py-4"
            />

            <div>
              <div className="flex justify-between items-center gap-2">
                <label className="text-[#666666] font-poppins text-[16px]">
                  Password
                </label>

                <p
                  onClick={HandlePassword}
                  className="cursor-pointer flex gap-2 items-center"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  {showPassword ? "Hide" : "Show"}
                </p>
              </div>

              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={HandleChange}
                placeholder="Enter your password"
                className="w-full border border-[#cac9c9] rounded-[12px] px-5 py-4"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center md:justify-between gap-3 pt-5">
            <Link href="/signin" >
            <button
              disabled={!isFormValid}
              className={`w-full md:w-auto border  rounded-[32px] px-10 md:px-24 py-3 cursor-pointer ${
                isFormValid
                  ? "bg-[#1A78E5] text-white hover:bg-blue-600"
                  : "bg-gray-300 text-white cursor-not-allowed"
              }`}
            >
              Login
            </button>
            </Link>
            <p className="underline text-[#111111] text-center md:text-left">
              Forgot your password
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex gap-2 items-center justify-center my-5 w-full">
              
              <Image
                src="/Divider.png"
                alt="divider"
                width={50}
                height={2}
                className="w-full max-w-[90px] md:max-w-[210px] h-[2px]"
              />

              <p className="text-[#666666] whitespace-nowrap text-sm md:text-base">
                Or log in with
              </p>

              <Image
                src="/Divider.png"
                alt="divider"
                width={50}
                height={2}
                className="w-full max-w-[90px] md:max-w-[210px] h-[2px]"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-[#666666] font-poppins text-[16px]">
Not a member? Get exclusive access to exhibitions and events, free admission every day, and much more.            </p>
            <Link href="/">
            <p className="underline text-[#111111]">Join Today</p>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default page;