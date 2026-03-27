"use client";
import Card from "@/components/Card/page";
import Image from "next/image";
import { useState } from "react";
import {
  JobsData,
  CompaniesData,
  CardButtonText,
} from "@/constants/jobs/jobsData";

const StudentHome = () => {
  const [activeForm, setActiveForm] = useState<number | null>(null);

  const handleToggle = (id: number) => {
    setActiveForm((prev) => (prev === id ? null : id));
  };

  return (
    <section className="w-full bg-[#F7FAFC]">
      <div className="max-w-[1440px] mx-auto">
        <div className="px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 py-4">
          <p className="text-xl sm:text-2xl md:text-3xl font-bold font-poppins text-[#0D141C]">
            Hello, Haroon
          </p>

          <div className="flex flex-wrap gap-4 mt-4">
            {CardButtonText.map((item, index) => (
              <Card key={index} buttonText={item} />
            ))}
          </div>

          <h1 className="text-[#0D141C] text-[28px] leading-[35px] font-bold font-poppins mt-10">
            Explore Opportunities
          </h1>

          <div className="mt-10 flex flex-col gap-6">
            {JobsData.map((item, index) => {
              const isOpen = activeForm === item.id;
              const detail = CompaniesData.find((c) => c.id === item.id);
              console.log("Detail found:", detail);
              return (
                <div key={index} className="flex flex-col gap-0">

                  <div className="flex justify-between gap-2 mt-5">
                    <div className="flex flex-col gap-2">
                      <p className="text-[#4F7096] leading-[21px] text-[14px] font-poppins">
                        {item.paragraphText}
                      </p>
                      <h2 className="text-[#0D141C] text-[16px] leading-[20px] font-bold font-poppins">
                        {item.headingText}
                      </h2>
                      <p className="text-[#4F7096] leading-[21px] text-[14px] font-poppins max-w-[608px]">
                        {item.secondParagrapghText}
                      </p>
                      <button
                        className="px-4 py-2 mt-3 max-w-[110px] bg-[#1A78E5] hover:bg-[#156BC2] text-white text-[14px] leading-[21px] font-bold rounded-[12px]"
                        onClick={() => handleToggle(item.id)}
                      >
                        {isOpen ? "Close" : "Apply Now"}
                      </button>
                    </div>

                    <div className="hidden md:flex justify-center lg:justify-end pr-0">
                      <Image
                        src={item.image}
                        alt="Company Logo"
                        width={320}
                        height={120}
                        className="w-[200px] sm:w-[260px] lg:w-[320px] h-auto"
                      />
                    </div>
                  </div>


                  {isOpen && detail && (
                    <div className="mt-4 bg-[#F7F2FA] rounded-[12px] px-6 sm:px-10 md:px-14 py-8">
                      <div className="flex justify-between items-start gap-4">
                
                        <div className="flex flex-col gap-1">
                          <h1 className="text-[#0D141C] text-[18px] leading-[24px] font-bold font-poppins">
                            {detail.jobPost}
                          </h1>
                          <p className="text-[#0D141C] leading-[21px] text-[14px] font-poppins">
                            {detail.jobDesignation}
                          </p>
                          <p className="text-[#0D141C] leading-[21px] text-[14px] font-poppins">
                            {detail.companyName}
                          </p>
                        </div>
                      </div>

                  
                      <hr className="my-4 border-[#000000]" />

                  
                      <h3 className="text-[#000000] text-[18px] font-bold font-poppins mb-1">
                        Description
                      </h3>
                      <p className="text-[#0D141C] leading-[21px] text-[14px] font-poppins mb-4">
                        {detail.jobDescription}
                      </p>

                    
                      <h4 className="text-[#000000] text-[18px] font-bold font-poppins mb-1">
                        Location
                      </h4>
                      <p className="text-[#0D141C] leading-[21px] text-[14px] font-poppins mb-4">
                        DHA Phase 8, {detail.companyName} Head Office {detail.location}
                      </p>



                  
                      <h5 className="text-[#000000] text-[18px] font-bold font-poppins mb-1">
                        Eligibility
                      </h5>
                      <ol className="list-decimal pl-5 text-[#0D141C] text-[14px] font-poppins leading-[21px] mb-6">
                        <li>{detail.listone}</li>
                        <li>{detail.listtwo}</li>
                        {detail.listthree && <li>{detail.listthree}</li>}
                      </ol>

               
                      <button className="px-6 py-2 bg-[#2DCE89] hover:bg-[#26b578] text-white text-[14px] leading-[21px] font-bold rounded-[20px]">
                        Apply
                      </button>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentHome;