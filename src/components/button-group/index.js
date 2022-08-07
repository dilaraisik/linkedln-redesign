import React from "react";

function ButtonGroup() {
    return (
        <div className="inline-flex rounded-md shadow-sm" role="group">
            <button type="button"
                    className="inline-flex items-center py-2 px-24 text-sm font-medium text-textBlack bg-transparent rounded-l-md border border-gray-900 focus:z-10 focus:ring-2 focus:ring-blue focus:bg-blue focus:text-white dark:border-white dark:text-white dark:focus:bg-gray-700">
                Profile
            </button>
            <button type="button"
                    className="inline-flex items-center py-2 px-24 text-sm font-medium text-textBlack bg-transparent border-t border-b border-gray-900 focus:z-10 focus:ring-2 focus:ring-blue focus:bg-blue focus:text-white dark:border-white dark:text-white dark:focus:bg-gray-700">
                Activity & interests
            </button>
            <button type="button"
                    className="inline-flex items-center py-2 px-24 text-sm font-medium text-textBlack bg-transparent rounded-r-md border border-gray-900  focus:z-10 focus:ring-2 focus:ring-blue focus:bg-blue focus:text-white dark:border-white dark:text-white dark:focus:bg-gray-700">
                Articles (3)
            </button>
        </div>
    );
}

export default ButtonGroup;
