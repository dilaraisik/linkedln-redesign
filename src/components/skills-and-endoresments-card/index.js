import React from 'react';


function SkillsCard() {
    return (
        <div className="bg-white border-white border-solid border-2 container-md p-7 rounded w-full">
            <p className="text-lg font-bold">Skills & Endoresments</p>
            <div className="grid grid-cols-3 mt-6">
            <div className="border-solid border-gray border-2 w-60 rounded-md ">
                <span className="text-textBlack text-sm font-bold mt-2 pl-5">User experience (UX)</span>
                <div className="flex -space-x-2 overflow-hidden mt-2 pl-5 pb-2">
                    <img className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                         src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                         alt=""/>
                    <img className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                         src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                         alt=""/>
                    <img className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                         src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                         alt=""/>
                    <img className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                         src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                         alt=""/>
                </div>
            </div>
            <div className="border-solid border-gray border-2 w-60 rounded-md ">
                <span className="text-textBlack text-sm font-bold mt-2 pl-5">User interface (UI)</span>
                <div className="flex -space-x-2 overflow-hidden mt-2 pl-5 pb-2">
                    <img className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                         src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                         alt=""/>
                    <img className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                         src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                         alt=""/>
                    <img className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                         src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                         alt=""/>
                    <img className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                         src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                         alt=""/>
                </div>
            </div>
            <div className="border-solid border-gray border-2 w-60 rounded-md ">
                <span className="text-textBlack text-sm font-bold mt-2 pl-5">Brand identity</span>
                <div className="flex -space-x-2 overflow-hidden mt-2 pl-5 pb-2">
                    <img className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                         src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                         alt=""/>
                    <img className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                         src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                         alt=""/>
                    <img className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                         src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                         alt=""/>
                    <img className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                         src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                         alt=""/>
                </div>
            </div>
            </div>
            <button className="text-blue uppercase text-xs mt-3">show all (17)</button>
        </div>
    );
}

export default SkillsCard;
