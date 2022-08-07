import React from 'react';
import Experience1 from "../../assets/images/experience-1.png";
import Experience2 from "../../assets/images/experience-2.png";

function ExperienceCard() {
    return (
        <div className="bg-white border-white border-solid border-2 container-md p-7 rounded w-full">
            <p className="text-lg font-bold">Experience</p>
            <div className="p-5 lg:p-6 flex flex-col border-b-2 border-solid border-b-gray">
                <div className="flex items-center flex-1 flex-col md:flex-row">
                    <div className="mr-5 lg:mr-14 mb-6 md:mb-0 flex items-center">
                        <img
                            src={Experience1}
                            alt="EducationLogo"
                            className="w-16 h-16 rounded-full"
                        />
                        <h4 className="flex md:hidden ml-5">Freelance UX/UI designer</h4>
                    </div>
                    <div className="flex flex-row lg:flex-col items-center lg:items-stretch flex-1">
                        <h4 className="text-textBlack font-bold mb-2 mr-6 hidden md:flex lg:mr-0 mb-2.5">
                            Freelance UX/UI designer
                        </h4>
                        <div className="flex">
                            <p className="text-xs text-textBlack mb-1.5">Self Employed</p>
                            <p className="text-xs text-textBlack ml-3">Around The World</p>
                        </div>
                        <div className="flex">
                            <p className="text-xs text-textBlack mb-2.5">Jun 2016 — Present</p>
                            <p className="text-xs text-blue ml-3">3 yrs 3 mos</p>
                        </div>
                        <p className="text-xs text-textBlack">Work with clients and web studios as freelancer. Work in
                            next areas: eCommerce web projects; creative landing pages; iOs and Android apps; corporate
                            web sites and corporate identity sometimes.</p>
                    </div>
                </div>
            </div>
            <div className="p-5 lg:p-6 flex flex-col">
                <div className="flex items-center flex-1 flex-col md:flex-row">
                    <div className="mr-5 lg:mr-14 mb-6 md:mb-0 flex items-center">
                        <img
                            src={Experience2}
                            alt="upwork"
                            className="w-16 h-16 rounded-full"
                        />
                        <h4 className="flex md:hidden ml-5">UX/UI designer</h4>
                    </div>
                    <div className="flex flex-row lg:flex-col items-center lg:items-stretch flex-1">
                        <h4 className="text-textBlack font-bold mb-2 mr-6 hidden md:flex lg:mr-0 mb-2.5">
                            UX/UI designer
                        </h4>
                        <div className="flex">
                            <p className="text-xs text-textBlack mb-1.5">Upwork</p>
                            <p className="text-xs text-textBlack ml-3">International</p>
                        </div>
                        <div className="flex">
                            <p className="text-xs text-textBlack mb-2.5">Jun 2019 — Present</p>
                            <p className="text-xs text-blue ml-3">3 mos</p>
                        </div>
                        <p className="text-xs text-textBlack">New experience with Upwork system. Work in next areas:
                            UX/UI design, graphic design, interaction design, UX research.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ExperienceCard;
