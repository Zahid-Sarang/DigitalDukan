import React from "react";

import { Link } from "react-router-dom";

// ============================= Tailwind Import ============================ //
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
// ============================================================================ //

// const items = [
//   {
//     id: 1,
//     title: "Back End Developer",
//     department: "Engineering",
//     type: "Full-time",
//     location: "Remote",
//   },
//   {
//     id: 2,
//     title: "Front End Developer",
//     department: "Engineering",
//     type: "Full-time",
//     location: "Remote",
//   },
//   {
//     id: 3,
//     title: "User Interface Designer",
//     department: "Design",
//     type: "Full-time",
//     location: "Remote",
//   },
// ];

const Pagination = () => {
  return (
    <div className="flex items-center justify-between px-4 py-3 bg-white border-t border-gray-200 sm:px-6">
      <div className="flex justify-between flex-1 sm:hidden">
        <Link
          to="/"
          className="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
        >
          Previous
        </Link>
        <Link
          to="/"
          className="relative inline-flex items-center px-4 py-2 ml-3 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
        >
          Next
        </Link>
      </div>
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700">
            Showing <span className="font-medium">1</span> to{" "}
            <span className="font-medium">10</span> of{" "}
            <span className="font-medium">97</span> results
          </p>
        </div>
        <div>
          <nav
            className="inline-flex -space-x-px rounded-md shadow-sm isolate"
            aria-label="Pagination"
          >
            <Link
              to="/"
              className="relative inline-flex items-center px-2 py-2 text-gray-400 rounded-l-md ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <span className="sr-only">Previous</span>
              <ChevronLeftIcon className="w-5 h-5" aria-hidden="true" />
            </Link>
            {/* Current: "z-10 black text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" */}
            <Link
              to="/"
              aria-current="page"
              className="relative z-10 inline-flex items-center px-4 py-2 text-sm font-semibold text-white bg-black focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              1
            </Link>
            <Link
              to="/"
              className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              2
            </Link>

            <Link
              to="/"
              className="relative inline-flex items-center px-2 py-2 text-gray-400 rounded-r-md ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <span className="sr-only">Next</span>
              <ChevronRightIcon className="w-5 h-5" aria-hidden="true" />
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
