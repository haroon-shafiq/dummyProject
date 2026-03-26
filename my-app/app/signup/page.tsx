"use client";
import React from "react";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Eye, EyeOff } from "lucide-react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
const SignUp = () => {
  const searchParams = useSearchParams();
  const role = searchParams.get("role");
  console.log("Role",role);
  const [formData, setFormData] = useState({
    profile: "",
    email: "",
    university: "",
    company: "",
    degreeProgram: "",
    password: "",
  });
  const [checkRole, setCheckRole] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [errors, setErrors] = useState({
  email: "",
  password: "",
});
useEffect(()=>{
  setCheckRole(role!);
  
},[role])
console.log("Check Role", checkRole);
const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const { name, value } = e.target;

  setFormData({
    ...formData,
    [name]: value,
  });


  if (name === "email") {
    setErrors((prev) => ({
      ...prev,
      email: isValidEmail(value) ? "" : "Invalid email format",
    }));
  }
  

  if (name === "password") {
    setErrors((prev) => ({
      ...prev,
      password: isValidPassword(value)
        ? ""
        : "Password must be 8+ chars with letters & numbers",
    }));
  }
};
  const isValidEmail = (email: string): boolean => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

 const isValidPassword = (password: string): boolean => {
  return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/.test(password);
};


const isFormValid =
  formData.profile &&
  formData.email &&
  formData.university &&
  formData.company &&
  formData.degreeProgram &&
  formData.password &&
  !errors.email &&
  !errors.password;
  return (
    <section className="w-full">
      <div className="max-w-[1440px] mx-auto py-[40px] md:py-[80px] px-4 flex justify-center">
        <div className="w-full max-w-[617px] flex flex-col gap-3 items-center">
          <Image src="/Logo.png" alt="alt" width={40} height={40} />

          <p className="font-medium text-[24px] md:text-[32px] text-[#333333] font-poppins text-center">
            Sign up for free to start live-streaming
          </p>

          <button className="text-[#333333] border rounded-[32px] text-[18px] md:text-[22px] px-6 md:px-[140px] py-[10px] mt-6 hover:bg-gray-200 font-poppins w-full md:w-auto">
            {`Joining as a ${role}`}
          </button>

          <div className="flex gap-4 items-center justify-center my-5 w-full">
            <Image
              src="/Divider.png"
              alt="divider"
              width={50}
              height={2}
              className="w-full  md:max-w-[200px] max-w-[100px] h-[2px]"
            />
            <p className="text-[#666666] whitespace-nowrap">OR</p>
            <Image
              src="/Divider.png"
              alt="divider"
              width={50}
              height={2}
              className="w-full md:max-w-[200px] max-w-[100px] h-[2px]"
            />
          </div>

          <div className="w-full max-w-[592px] flex flex-col gap-[40px] mt-4">
            <p className="text-center text-[#333333] text-[16px] md:text-[18px] font-medium font-poppins">
              {role == 'student' ? 'Sign up with your University email address as a student' : 'Sign up with your company email address as a hiring manager'}
            </p>

            <form className="w-full max-w-[578px] flex flex-col gap-2">
              <label className="text-[#666666] text-[16px] font-poppins">
                Profile name
              </label>
              <input
                type="text"
                name="profile"
                value={formData.profile}
                onChange={handleChange}
                placeholder="Enter your profile name"
                className="w-full border border-[#cac9c9] rounded-[12px] px-5 py-4"
              />

              <label className="text-[#666666] text-[16px] font-poppins mt-4">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full border border-[#cac9c9] rounded-[12px] px-5 py-4"
              />
              {errors.email && (
  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
)}

              <label className="text-[#666666] text-[16px] font-poppins mt-4">
                {checkRole == 'student' ? 'University' : 'Company'}
              </label>
              <input
                type="text"
                name={checkRole == 'student' ? 'University' : 'Company'}
                value={checkRole == 'student' ? formData.university : formData.company}
                onChange={handleChange}
                placeholder={`Enter your ${checkRole == 'student' ? 'University' : 'Company'} name`}
                className="w-full border border-[#cac9c9] rounded-[12px] px-5 py-4"
              />
              {checkRole == 'student' ? (
                <>              <label className="text-[#666666] text-[16px] font-poppins mt-4">
                Degree Program
              </label>
              <input
                type="text"
                name="degreeProgram"
                value={formData.degreeProgram}
                onChange={handleChange}
                placeholder="Enter your degree Program name"
                className="w-full border border-[#cac9c9] rounded-[12px] px-5 py-4"
              />
              </>
              ): null
              }
              <div className="flex justify-between items-center mt-4">
                <label className="text-[#666666] text-[16px] font-poppins">
                  Password
                </label>

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="flex items-center gap-1 text-[#666666] text-[16px] font-poppins"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="w-full border border-[#cac9c9] rounded-[12px] px-5 py-4"
              />
              {errors.password && (
  <p className="text-red-500 text-sm mt-1">{errors.password}</p>
)}

              <p className="font-poppins text-[14px] text-[#666666]">
                Use 8 or more characters with a mix of letters, numbers &
                symbols
              </p>

              <div className="flex flex-col items-center gap-2 justify-center mt-4">
                <p>
                  What's your gender?{" "}
                  <span className="font-poppins text-[#666666] underline">
                    (Optional)
                  </span>
                </p>
                <div className="flex gap-2 flex-wrap justify-center">
                  <input type="checkbox" />
                  <p className="pr-7 font-poppins">Male</p>
                  <input type="checkbox" />
                  <p className="font-poppins">Female</p>
                </div>
              </div>

              <div className="flex gap-2 items-baseline  mt-4">
                <input type="checkbox" />
                <p className="font-poppins text-[16px] text-[#333333]">
                  Share my registration data with our content providers for
                  marketing purposes.
                </p>
              </div>

              <p className="text-[14px] font-poppins py-2">
                By creating an account, you agree to the{" "}
                <span className="underline">Terms of use</span> and{" "}
                <span className="underline">Privacy Policy.</span>
              </p>

              <div className="w-full max-w-[360px] mt-3 flex px-4 py-3 border border-[#333333] rounded-[18px] items-center justify-between">
                <div className="flex gap-2">
                  <input type="checkbox" className="accent-green-400" />
                  <p>I am not a rebot.</p>
                </div>
                <Image
                  src="/googleCaptcha.png"
                  alt="google captcha"
                  width={40}
                  height={40}
                />
              </div>

              <button
                disabled={!isFormValid}
                className={`w-full md:w-auto rounded-[32px] text-[18px] md:text-[22px] px-6 md:px-[140px] py-3 mt-6 font-poppins transition
                ${
                  isFormValid
                    ? "bg-[#1A78E5] text-white hover:bg-blue-600"
                    : "bg-gray-300 text-white cursor-not-allowed"
                }`}
              >
                Sign Up
              </button>

              <p className="text-center font-poppins text-[16px]">
                Already have an account?{" "}
                <Link href="/signin">
                <span className="underline underline-offset-4">Login</span>
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
