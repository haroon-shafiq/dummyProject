"use client";
import { useState } from "react";
import Image from "next/image";
const Profile = () => {
  const [image, setImage] = useState<string | null>(null);
  const [name, setName] = useState<string>("Choose a name");
  const [bio, setBio] = useState<string>("Choose a bio");
  const [description, setDescription] = useState<string>(
    "Choose a description",
  );
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    console.log("File selected:", file);

    if (file) {
      console.log("URL created:", URL.createObjectURL(file));
      setImage(URL.createObjectURL(file));
    }
  };
  const HandleEdit = () => {
    setIsEditing(!isEditing);
  };
  return (
    <section className="w-full">
      <div className="max-w-[1440px] mx-auto">
        <div className="lg:min-w-[960px] min-w-[300px]">
          <div className="flex flex-col gap-3 items-center justify-center pt-5">
            <div className="relative w-32 h-32 rounded-full overflow-hidden bg-gray-300 flex items-center justify-center">
              {image ? (
                <img src={image} className="w-full h-full object-cover" />
              ) : (
                <span className="text-gray-500 text-sm">Upload Image</span>
              )}

              <input
                type="file"
                onChange={handleImageChange}
                className="absolute inset-0 opacity-0 cursor-pointer"
              />
            </div>
            <h2 className="leading-[28px] font-poppins text-[22px] text-[#0D141C] ">
              {" "}
              {name}{" "}
            </h2>
            <p className="text-[16px] leading-[24px] text-[#4F7096] text-center">
              {bio}
            </p>
            <p className="text-[14px] leading-[22px] text-[#4F7096] text-center md:px-16 px-4">
              {description}
            </p>

            <button
              className="bg-[#1A78E5] hover:bg-[#156BC2] leading-[21px]  text-[14px] text-white font-bold lg:px-50 md:px-35 px-20 md:py-3 py-2 rounded "
              onClick={HandleEdit}
            >
              {isEditing ? "Save Changes" : "Edit Profile"}
            </button>
            {isEditing && (
              <div className="fixed bottom-60 inset-0 h-full bg-black/80 flex items-center justify-center z-50 transition-all transition delay-150 duration-300 ease-in-out ">
                <div className="bg-white rounded-xl w-[90%] max-w-md p-6 shadow-lg ">
                  <h2 className="text-lg font-semibold mb-4 text-center ">
                    Edit Profile
                  </h2>

                  <div className="flex flex-col gap-4">
                    <input
                      type="text"
                      placeholder="Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="border rounded px-3 py-2"
                    />

                    <input
                      type="text"
                      placeholder="Bio"
                      value={bio}
                      onChange={(e) => setBio(e.target.value)}
                      className="border rounded px-3 py-2"
                    />

                    <textarea
                      placeholder="Description"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      className="border rounded px-3 py-2"
                    />

                    {/* Buttons */}
                    <div className="flex justify-between gap-3 mt-4">
                      <button
                        onClick={() => setIsEditing(false)}
                        className="w-full border rounded py-2"
                      >
                        Cancel
                      </button>

                      <button
                        onClick={() => setIsEditing(false)}
                        className="w-full bg-[#1A78E5] text-white rounded py-2"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="flex flex-col lg:px-40 md:px-30 px-10 pt-5 pb-3 gap-5">
            <h1 className="text-[#0D141C] font-poppins leading-[28px] font-semibold text-[22px]">
              About
            </h1>
            <p className="leading-[24px] font-[16px] text-[16px] text-[#0D141C] ">
              Highly motivated and detail-oriented computer science student at
              BNU with a strong foundation in programming, data structures, and
              algorithms. Proven ability to work effectively in teams and
              independently, demonstrated through various academic projects and
              extracurricular activities. Eager to contribute to a dynamic and
              challenging environment where I can further develop my skills and
              make a meaningful impact.
            </p>
            <h2 className="text-[#0D141C] font-poppins leading-[28px] font-semibold text-[22px] ">
              Education
            </h2>
            <div className="flex gap-3">
              <Image
                src="/Education.png"
                alt="Education"
                width={60}
                height={60}
                className="w-[40px] h-[40px]"
              />
              <div className="flex flex-col ">
                <p className="text-[16px] text-[#0D141C]">
                  Bachelor of Science in Computer Science
                </p>
                <p className="text-[#4F7096] text-[14px]">
                  Bsc Computer Science
                </p>
                <p className="text-[#4F7096] leading-[21px] text-[14px] ">
                  2021-2025
                </p>
              </div>
            </div>
            <h2 className="text-[#0D141C] font-poppins leading-[28px] font-semibold text-[22px] ">
              Links
            </h2>
            <div className="flex gap-3 flex-wrap">
              <p className="bg-[#E8EDF2] text-[#0D141C] text-center px-4 py-2 rounded-[12px] ">
                Github
              </p>
              <p className="bg-[#E8EDF2] text-[#0D141C] text-center px-4 py-2 rounded-[12px] ">
                LinkedIn
              </p>
              <p className="bg-[#E8EDF2] text-[#0D141C] text-center px-4 py-2 rounded-[12px] ">
                Portfolio
              </p>
            </div>
            <h3 className="text-[#0D141C] font-poppins leading-[28px] font-semibold text-[22px] ">
              Resume
            </h3>

            <div className="w-20 h-25 bg-[#E8EDF2] rounded-[12px] flex flex-col items-center justify-end relative cursor-pointer overflow-hidden">
              <input
                type="file"
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />

              <div className="flex items-center justify-center flex-1">
                <span className="text-[12px] font-bold text-black">Upload</span>
              </div>

              <p className="text-[#0D141C] text-[14px] py-2">Download</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Profile;
