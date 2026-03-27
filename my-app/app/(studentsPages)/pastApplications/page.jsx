'use client';
import React from "react";
import Image from "next/image";
import { applicationsData } from "@/constants/ApplicationCard/ApplicationCard";

const PastApplications = () => {
    const [activeTab, setActiveTab] = React.useState("All");

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    return (
        <section className="w-full bg-[#F7FAFC] h-screen pt-5">
            <div className="max-w-[1440px] mx-[50px] h-full flex flex-col gap-4">

                <h1 className="p-4 text-[#0D141C] leading-[40px] font-bold font-poppins">
                    Past Applications
                </h1>

                <div className="flex justify-between gap-4">
                    <button
                        className={`px-4 py-2 max-w-[110px] rounded-[12px] ${activeTab === "All" ? "bg-[#1A78E5] text-white" : "bg-[#E2E8F0] text-[#4F7096]"}`}
                        onClick={() => handleTabChange("All")}
                    >
                        All
                    </button>
                </div>
                             {
                    activeTab === "All" && (
                        <p className="text-[#4F7096] mt-4 text-center">
                            You have {applicationsData.length} past applications.
                        </p>
                    )
                }
                <div className="flex flex-col gap-6 mt-6">

                    {applicationsData.map((application) => (
                        <div key={application.id} className="flex flex-col md:flex-row md:justify-between gap-3 md:gap-0">
                            <div className="flex gap-3 items-start md:items-center">
                                <Image
                                    src={application.image}
                                    alt="Job Image"
                                    width={50}
                                    height={50}
                                />

                                <div className="flex flex-col">
                                    <h2 className="text-[#0D141C] leading-[24px] font-poppins text-[16px]">
                                        {application.title}
                                    </h2>
                                    <p className="text-[#4F7096]">
                                        Applied on {application.date}
                                    </p>
                                </div>
                            </div>

                            <button className="px-4 py-2 mt-2 md:mt-3 w-full md:w-auto max-w-[110px] md:max-w-none bg-[#1A78E5] hover:bg-[#156BC2] text-white text-[14px] leading-[21px] font-bold rounded-[12px]">
                                Accepted
                            </button>

                        </div>
                    ))}

                </div>
   
            </div>
        </section>
    );
};

export default PastApplications;