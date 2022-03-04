import React from 'react';
import EducationLogo from '../../assets/images/Rectangle 2.2.png';


function EducationCard() {
    return (
        <div className="bg-white border-white border-solid border-2 p-7 rounded w-full">
            <p className="text-lg font-bold">Education</p>
            <div className="p-5 lg:p-6 flex flex-col">
                <div className="flex items-center flex-1 flex-col md:flex-row">
                    <div className="mr-5 lg:mr-14 mb-6 md:mb-0 flex items-center">
                        <img
                            src={EducationLogo}
                            alt="EducationLogo"
                            className="w-16 h-16 rounded-full"
                        />
                        <h4 className="flex md:hidden ml-5">Moscow State Linguistic University</h4>
                    </div>
                    <div className="flex flex-row lg:flex-col items-center lg:items-stretch flex-1">
                        <h4 className="text-textBlack font-bold mb-2 mr-6 hidden md:flex lg:mr-0 mb-2.5">
                            Moscow State Linguistic University
                        </h4>
                        <p className="text-xs text-textBlack mb-1.5">Bachelor's degree Field Of StudyComputer and Information Systems Security/Information Assurance</p>
                        <p className="text-xs text-textBlack mb-2.5">2013 — 2017</p>
                        <p className="text-xs text-textBlack">Additional English classes and UX profile courses.</p>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default EducationCard;
