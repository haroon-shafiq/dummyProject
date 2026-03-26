"use client";
import Image from "next/image";
import Link from "next/link";
import SignUp from "@/app/signup/page";
interface LandingPageProps {
  image: string;
  imageInfo: string;
  width: number;
  height: number;
  headingText: string;
  paragraphText: string;
  buttonText: string;
  buttonUrl:string;
}

const LandingPage = ({
  image,
  imageInfo,
  width,
  height,
  headingText,
  paragraphText,
  buttonText,
  buttonUrl
}: LandingPageProps) => {

const roleMap = {
  "Create Student Profile": "student",
  "Create Company Profile": "Hiring Manager",
};
const role = roleMap[buttonText];

  return (
    <>    <div className="flex flex-col md:flex-row items-center gap-4 p-4">
      <Image src={image} alt={imageInfo} width={width} height={height} />

      <div className="flex flex-col max-w-[432px]">
        <h2 className="text-[#0D141C] font-semibold text-[22px]">
          {headingText}
        </h2>

        <div className="max-w-[334px] pt-[10px]">
          <p className="text-[#4F7096]">{paragraphText}</p>
        </div>

        <div className="pt-4">
          <Link href={
            {
              pathname:buttonUrl,
              query: {role}
            }
          }>
          
        
          <button className="bg-[#1A78E5] rounded-2xl px-3 py-2 text-[#F7FAFC] cursor-pointer">
            {buttonText}
          </button>
          </Link>
        </div>
      </div>
      
    </div>
   
</>

  );
};

export default LandingPage;
