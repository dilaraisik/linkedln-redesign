import React from 'react';
import Course1 from "../../assets/images/Course-1.png";
import Course2 from "../../assets/images/Course-2.png";
import Course3 from "../../assets/images/Course-3.png";

function Courses() {
    return (
        <div className="bg-white border-white border-solid border-2 container-md p-7 w-full rounded">
            <div className="border-b-gray border-b-2 border-b-solid">
                <p className="text-xs text-textBlack font-bold uppercase pb-5">You may like these courses</p>
            </div>
            <div className="flex flex-col">
                <div className="flex items-center flex-1 flex-col md:flex-row mt-5">
                    <div className="flex items-center">
                        <img
                            src={Course1}
                            alt="Visitor"
                            className=""
                        />
                    </div>
                    <div className="flex flex-row lg:flex-col items-center lg:items-stretch flex-1 ml-4">
                        <p className="text-textBlack text-sm font-bold md:flex">
                            UX Foundations:
                            Prototyping
                        </p>
                        <p className="text-xs text-textBlack">27,959 viewers</p>
                    </div>
                </div>
                <div className="flex items-center flex-1 flex-col md:flex-row mt-5">
                    <div className="flex items-center">
                        <img
                            src={Course2}
                            alt="Visitor"
                            className=""
                        />
                    </div>
                    <div className="flex flex-row lg:flex-col items-center lg:items-stretch flex-1 ml-4">
                        <p className="text-textBlack text-sm font-bold md:flex">
                            Designing with
                            Adobe XD and pro
                        </p>
                        <p className="text-xs text-textBlack">9,122 viewers</p>
                    </div>
                </div>
                <div className="flex items-center flex-1 flex-col md:flex-row mt-5">
                    <div className="flex items-center">
                        <img
                            src={Course3}
                            alt="Visitor"
                            className=""
                        />
                    </div>
                    <div className="flex flex-row lg:flex-col items-center lg:items-stretch flex-1 ml-4">
                        <p className="text-textBlack text-sm font-bold md:flex">
                            UX Foundations:
                            Styles and GUIs
                        </p>
                        <p className="text-xs text-textBlack">13,858 viewers</p>
                    </div>
                </div>
            </div>
            <button className="text-blue uppercase text-xs mt-5">See all recomendations</button>
        </div>
    );
}

export default Courses;
