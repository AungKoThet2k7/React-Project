import React, { useState } from "react";
import { HiHome, HiX } from "react-icons/hi";
import { HiMiniSquare3Stack3D } from "react-icons/hi2";
import { LuChevronDown, LuMinus } from "react-icons/lu";
import { MdOutlineWidgets } from "react-icons/md";
import { Link } from "react-router-dom";
const Sidebar = ({ handleSidebar, isOpen }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  return (
    <div
      className={`${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } duration-300 fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto bg-gray-800 w-64`}
    >
      <h1 className="font-bold bg-white text-lg text-center mb-5 text-sky-600">VELZON</h1>
      <div className="flex items-center justify-between">
        <h5 className="text-base font-semibold text-gray-400 uppercase">
          Menu
        </h5>
        <button
          onClick={handleSidebar}
          className="text-gray-400 bg-transparent hover:bg-gray-600 hover:text-white rounded-lg text-sm inline-flex items-center justify-center"
        >
          <HiX size={26} />
          <span className="sr-only">Close menu</span>
        </button>
      </div>
      <div className="py-4 overflow-y-auto">
        <ul className="space-y-2 font-medium">
          <li>
            <button
              onClick={handleDropdown}
              className="flex items-center group w-full p-2 text-base transition duration-75 rounded-lg group text-white hover:bg-gray-700"
            >
              <HiHome
                className="text-gray-400 group-hover:text-white"
                size={20}
              />
              <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
                Dashboard
              </span>
              <LuChevronDown
                className={
                  dropdownOpen
                    ? "rotate-180 duration-300"
                    : "rotate-0 duration-300"
                }
                size={20}
              />
            </button>
            <ul
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                dropdownOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
              }py-2 space-y-2`}
            >
              <li>
                <Link
                  to="/dashboard/analytics"
                  className="flex items-center gap-2 w-full p-2 transition duration-75 rounded-lg pl-5 group text-gray-400 hover:text-white hover:bg-gray-700"
                >
                  <LuMinus />
                  Analytics
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard/ecommerce"
                  className="flex items-center gap-2 w-full p-2 transition duration-75 rounded-lg pl-5 group text-gray-400 hover:text-white hover:bg-gray-700"
                >
                  <LuMinus />
                  Ecommerce
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard/products"
                  className="flex items-center gap-2 w-full p-2 transition duration-75 rounded-lg pl-5 group text-gray-400 hover:text-white hover:bg-gray-700"
                >
                  <LuMinus />
                  Products
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link
              to="/dashboard/advance-ui"
              className="flex items-center group w-full p-2 text-base transition duration-75 rounded-lg group text-white hover:bg-gray-700"
            >
              <HiMiniSquare3Stack3D
                className="text-gray-400 group-hover:text-white"
                size={20}
              />
              <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
                Advance UI
              </span>
              <div className="bg-sky-400 text-white rounded-md text-sm px-2">
                New
              </div>
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/widgets"
              className="flex items-center group w-full p-2 text-base transition duration-75 rounded-lg group text-white hover:bg-gray-700"
            >
              <MdOutlineWidgets
                className="text-gray-400 group-hover:text-white"
                size={20}
              />
              <span className="ms-3 text-left rtl:text-right whitespace-nowrap">
                Widgets
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
