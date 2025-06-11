import React, { useState } from "react";
import { HiHome, HiX } from "react-icons/hi";
import { HiMiniSquare3Stack3D, HiPhoto } from "react-icons/hi2";
import { LuChevronDown, LuMinus } from "react-icons/lu";
import { MdOutlineWidgets } from "react-icons/md";
import { Link, useResolvedPath } from "react-router-dom";
import SidebarList from "./sidebarList";
const Sidebar = ({ handleSidebar, isOpen }) => {
  const { pathname } = useResolvedPath();

  const sidebarItems = [
    {
      name: "Dashboard",
      icon: <HiHome size={20} />,
      childrens: [
        {
          name: "Analytics",
          icon: <LuMinus />,
          path: "/dashboard/analytics",
        },
        {
          name: "E-Commerce",
          icon: <LuMinus />,
          path: "/dashboard/ecommerce",
        },
        {
          name: "Products",
          icon: <LuMinus />,
          path: "/dashboard/products",
        },
      ],
    },
    {
      name: "Blog",
      icon: <HiPhoto size={20} />,
      childrens: [
        {
          name: "Blog",
          icon: <LuMinus />,
          path: "/dashboard/blog",
        },
        {
          name: "Blog Create",
          icon: <LuMinus />,
          path: "/dashboard/blog/create",
        },
      ],
    },
    {
      name: "Advance UI",
      icon: <HiMiniSquare3Stack3D size={20} />,
      noti: true,
      path: "/dashboard/advance-ui",
    },
    {
      name: "Widgets",
      icon: <MdOutlineWidgets size={20} />,
      path: "/dashboard/widgets",
    },
  ];

  return (
    <aside
      className={`${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } duration-300 fixed top-0 left-0 z-40 h-screen shadow-md overflow-y-auto bg-gray-800 w-64`}
    >
      <img
        className=" h-[48px] sm:h-[58px] bg-white w-full py-1"
        src="../src/assets/React-logo.svg"
        alt=""
      />
      <div className="flex items-center justify-between p-4">
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
      <div className="p-4 overflow-y-auto">
        <ul className="space-y-2 font-medium">
          {sidebarItems.map((item, index) => (
            <SidebarList key={index} pathname={pathname} item={item} />
          ))}

          {/* <li>
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
          </li> */}

          {/* <li>
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
              to="/dashboard/blog"
              className="flex items-center group w-full p-2 text-base transition duration-75 rounded-lg group text-white hover:bg-gray-700"
            >
              <HiPhoto
                className="text-gray-400 group-hover:text-white"
                size={20}
              />
              <span className="ms-3 text-left rtl:text-right whitespace-nowrap">
                Blog
              </span>
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
          </li> */}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
