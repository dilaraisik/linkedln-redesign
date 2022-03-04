import React from 'react';
import Visitor1 from '../../assets/images/Visitor-1.png';
import Visitor2 from '../../assets/images/Visitor-2.png';
import Visitor3 from '../../assets/images/Visitor-3.png';
import Visitor4 from '../../assets/images/Visitor-4.png'
import Visitor5 from '../../assets/images/Visitor-5.png'


function Visitors() {
    return (
        <div className="bg-white border-white border-solid border-2 container-md p-7 w-full rounded">
            <div className="border-b-gray border-b-2 border-b-solid">
                <p className="text-xs text-textBlack font-bold uppercase pb-5">Visitors</p>
                {/*<button className="text-blue uppercase text-xs mt-3">see more</button>*/}
            </div>

            <div className="flex flex-col">
                <div className="flex items-center flex-1 flex-col md:flex-row">
                    <div className="flex items-center">
                        <img
                            src={Visitor1}
                            alt="Visitor"
                            className="rounded-full"
                        />
                    </div>
                    <div className="flex flex-row lg:flex-col items-center lg:items-stretch flex-1 ml-4 mt-5">
                        <p className="text-textBlack text-sm font-bold md:flex">
                            Darlene Black
                        </p>
                        <p className="text-xs text-textBlack"> HR-manager, 10 000 connec...</p>
                    </div>
                </div>
                <div className="flex items-center flex-1 flex-col md:flex-row">
                    <div className="flex items-center">
                        <img
                            src={Visitor2}
                            alt="Visitor"
                            className="rounded-full"
                        />
                    </div>
                    <div className="flex flex-row lg:flex-col items-center lg:items-stretch flex-1 ml-4 mt-5">
                        <p className="text-textBlack text-sm font-bold md:flex">
                            Theresa Steward
                        </p>
                        <p className="text-xs text-textBlack">iOS developer</p>
                    </div>
                </div>
                <div className="flex items-center flex-1 flex-col md:flex-row">
                    <div className="flex items-center">
                        <img
                            src={Visitor3}
                            alt="Visitor"
                            className="rounded-full"
                        />
                    </div>
                    <div className="flex flex-row lg:flex-col items-center lg:items-stretch flex-1 ml-4 mt-5">
                        <p className="text-textBlack text-sm font-bold md:flex">
                            Brandon Wilson
                        </p>
                        <p className="text-xs text-textBlack">Senior UX designer</p>
                    </div>

                </div>
                <div className="flex items-center flex-1 flex-col md:flex-row">
                    <div className="flex items-center">
                        <img
                            src={Visitor4}
                            alt="Visitor"
                            className="rounded-full"
                        />
                    </div>
                    <div className="flex flex-row lg:flex-col items-center lg:items-stretch flex-1 ml-4 mt-5">
                        <p className="text-textBlack text-sm font-bold md:flex">
                            Kyle Fisher
                        </p>
                        <p className="text-xs text-textBlack">Product designer at Com...</p>
                    </div>

                </div>
                <div className="flex items-center flex-1 flex-col md:flex-row">
                    <div className="flex items-center">
                        <img
                            src={Visitor5}
                            alt="Visitor"
                            className="rounded-full"
                        />
                    </div>
                    <div className="flex flex-row lg:flex-col items-center lg:items-stretch flex-1 ml-4 mt-5">
                        <p className="text-textBlack text-sm font-bold md:flex">
                            Audrey Alexander
                        </p>
                        <p className="text-xs text-textBlack">Team lead at Google</p>
                    </div>

                </div>

            </div>

        </div>
    );
}

export default Visitors;
