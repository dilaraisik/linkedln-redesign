import React from 'react';
import Logo from '../../assets/logo/Footer-Logo.png';
import linkedinText from '../../assets/logo/LinkedIn.png';
import QuestionIcon from '../../assets/icons/circle-question-regular.svg';

function Footer() {
    return (
        <div className=" w-full bg-footerBg border-t-footerLine border-t-solid border-t-2 container-md p-7 mt-10">
            <div className="grid grid-cols-4 gap-4">
                <div className="flex-row">
                    <img className="ml-32 mt-7" src={Logo}/>
                    <img className="ml-32 w-20 mt-2" src={linkedinText}/>
                </div>
                <div>
                    <p className="mb-8 text-textBlack text-sm font-bold">Navigation</p>
                    <div className="grid grid-cols-3 gap-4">
                        <div className="">
                            <p className="mb-4 text-textBlack text-sm">
                                <a href="#!" className="text-gray-600">About</a>
                            </p>
                            <p className="mb-4 text-textBlack text-sm">
                                <a href="#!" className="text-gray-600">Careers</a>
                            </p>
                            <p className="mb-4 text-textBlack text-sm">
                                <a href="#!" className="text-gray-600">Advertising</a>
                            </p>
                            <p className="text-textBlack text-sm">
                                <a href="#!" className="text-gray-600">Small Business</a>
                            </p>
                        </div>
                        <div className="w-60 ml-10">
                            <p className="mb-4 text-textBlack text-sm">
                                <a href="#!" className="text-gray-600">Talent Solutions</a>
                            </p>
                            <p className="mb-4 text-textBlack text-sm">
                                <a href="#!" className="text-gray-600">Marketing Solutions</a>
                            </p>
                            <p className="mb-4 text-textBlack text-sm">
                                <a href="#!" className="text-gray-600">Sales Solutions</a>
                            </p>
                            <p className="text-textBlack text-sm">
                                <a href="#!" className="text-gray-600">Safery Center</a>
                            </p>
                        </div>
                        <div className="w-60 ml-10">
                            <p className="mb-4 text-textBlack text-sm">
                                <a href="#!" className="text-gray-600">Community Guidelines</a>
                            </p>
                            <p className="mb-4 text-textBlack text-sm">
                                <a href="#!" className="text-gray-600">Privacy & Terms</a>
                            </p>
                            <p className="mb-4 text-textBlack text-sm">
                                <a href="#!" className="text-gray-600">Mobile App</a>
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <p className="mb-8 text-textBlack text-sm font-bold ml-20">Fast access</p>
                    <div className="ml-20">
                        <button className="bg-blue text-white uppercase rounded p-4 text-xs inline-flex items-center">
                            <span>Questions?</span>
                            <img width="13" height="13"
                                 className="text-white ml-11 "
                                 src={QuestionIcon}/>

                        </button>
                    </div>
                    <div className="mt-2.5 ml-20">
                        <button className="bg-white text-blue uppercase border-blue border-2 border-solid rounded p-4 text-xs inline-flex items-center">
                            <span>Settings</span>
                            <img width="13" height="13"
                                 className="text-white ml-14"
                                 src={QuestionIcon}/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
