import React from 'react';
import Logo from '../../assets/logo/Logo.png';

function Navbar() {
    return (
        <nav className="flex items-center justify-between flex-wrap bg-white p-6 shadow-default">
            <div className="flex items-center flex-shrink-0 text-black mr-6">
                <img className="fill-current h-10 w-10 mr-12" width="54" height="54" viewBox="0 0 54 54" src={Logo}>
                </img>
            </div>
            <div className="block lg:hidden">
                <button
                    className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-black hover:border-white">
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <title>Menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                    </svg>
                </button>
            </div>
            <div className="flex flex-row gap-10 max-w-[1180px] w-full mx-auto">
                <div className="w-full max-w-[850px] flex uppercase">
                    <a href="#responsive-header"
                       className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-black mr-4">
                        Feed
                    </a>
                    <a href="#responsive-header"
                       className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-black mr-4">
                        Network
                    </a>
                    <a href="#responsive-header"
                       className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-black mr-4">
                        Jobs
                    </a>
                    <a href="#responsive-header"
                       className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-black mr-4">
                        Chat
                    </a>
                    <a href="#responsive-header"
                       className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-black">
                        Notices
                    </a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
