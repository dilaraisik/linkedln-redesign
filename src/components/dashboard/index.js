import React from 'react';

function Dashboard() {
    return (
        <div className="bg-white border-white border-solid border-2 container-md p-7 w-full rounded">
            <div className="flex align-middle border-b-gray border-b-2 border-b-solid pb-5">
                <span className="text-xs text-textBlack font-bold uppercase">Your Dashboard</span>
                <button className="text-blue uppercase text-xs ml-auto">go to stats</button>
            </div>

            <div className="mt-5">
                <p className="text-blue text-5xl">367</p>
                <p className="text-textBlack text-sm">views today</p>
            </div>
            <div className="mt-5">
                <p className="text-blue text-5xl">15</p>
                <p className="text-textBlack text-sm">posts views</p>
            </div>
            <div className="mt-5">
                <p className="text-blue text-5xl">9</p>
                <p className="text-textBlack text-sm">search appereances</p>
            </div>
        </div>
    );
}

export default Dashboard;
