import React, { useState } from "react";
import { HiMiniSquare3Stack3D } from "react-icons/hi2";
import { LuChevronDown, LuMinus } from "react-icons/lu";
import { Link } from "react-router-dom";

const SidebarList = ({ item, pathname }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  if (item.childrens) {
    return (
      <li>
        <button
          onClick={handleDropdown}
          className={`${
            dropdownOpen && "text-white bg-gray-700"
          } text-white hover:bg-gray-700 flex items-center group w-full p-2 text-base transition duration-75 rounded-lg group`}
        >
          <span
            className={`${
              dropdownOpen && "text-white"
            } text-gray-400 group-hover:text-white`}
          >
            {item.icon}
          </span>
          <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
            {item.name}
          </span>
          <LuChevronDown
            className={
              dropdownOpen ? "rotate-180 duration-300" : "rotate-0 duration-300"
            }
            size={20}
          />
        </button>
        <ul
          className={`transition-all duration-300 ease-in-out overflow-hidden ${
            dropdownOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
          }py-2`}
        >
          {item.childrens.map((child, index) => (
            <li key={index}>
              <Link
                to={child.path}
                className={`${
                  child.path === pathname && "text-white bg-gray-700"
                } text-gray-400 hover:text-white hover:bg-gray-700 first:mt-2 flex items-center gap-2 w-full p-2 transition duration-75 rounded-lg pl-5 group `}
              >
                <span
                  className={`${
                    child.path === pathname && "text-white"
                  } text-gray-400 group-hover:text-white`}
                >
                  {child.icon}
                </span>
                {child.name}
              </Link>
            </li>
          ))}
        </ul>
      </li>
    );
  } else {
    return (
      <li>
        <Link
          to={item.path}
          className={`${
            item.path === pathname && "bg-gray-700"
          } text-white hover:bg-gray-700 flex items-center group w-full p-2 text-base transition duration-75 rounded-lg group `}
        >
          <span
            className={`${
              item.path === pathname && "text-white"
            } text-gray-400 group-hover:text-white`}
          >
            {item.icon}
          </span>
          <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
            {item.name}
          </span>
          {item.noti && (
            <div className="bg-sky-400 text-white rounded-md text-sm px-2">
              New
            </div>
          )}
        </Link>
      </li>
    );
  }
};

export default SidebarList;
