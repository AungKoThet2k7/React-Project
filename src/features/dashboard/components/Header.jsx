import { useState } from "react";
import Avatar from "react-avatar";
import { LuLogOut, LuMenu, LuSettings, LuUser } from "react-icons/lu";

import Sidebar from "../../../components/sidebar";
import { Link } from "react-router-dom";
import useCookie, { removeCookie } from "react-use-cookie";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const [userCookie, setUserCookie] = useCookie("user");

  const { name, profile_image } = JSON.parse(userCookie);

  const handleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleProfile = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  const handleLogOut = () => {
    removeCookie("token");
    removeCookie("user");
  };

  return (
    <header className="bg-white border-b border-gray-200 flex justify-between">
      <nav className="flex items-center gap-2 sm:gap-3 px-5 py-2">
        <button
          onClick={handleSidebar}
          className="flex items-center justify-center text-gray-400 hover:text-gray-600"
        >
          <LuMenu className="size-6 sm:size-7" />
        </button>

        <Sidebar isOpen={isOpen} handleSidebar={handleSidebar} />

        <input
          type="text"
          id="base-input"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-xs sm:text-sm rounded-lg block w-full p-1.5 sm:p-2.5 dark:bg-gray-700 outline-none dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
          placeholder="Search . . ."
        />
      </nav>

      <button
        onClick={handleProfile}
        className="bg-sky-50 px-5 py-2 me-3 flex items-center gap-2 sm:gap-3"
      >
        <img
          src={
            profile_image
              ? profile_image
              : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScvC6w8tifYJLzXGgX42aMl4aInILAAozKgw&s"
          }
          className="size-8 sm:size-10 shadow rounded-full"
          alt=""
        />

        <p className="text-sm sm:text-base font-semibold">{name}</p>
      </button>

      {isProfileOpen && (
        <div className="absolute right-3 mt-16 py-2 w-52 bg-white rounded-md shadow z-10">
          <Link
            to="/dashboard/user-profile"
            className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            <LuUser size={18} />
            <span>Profile</span>
          </Link>
          <Link
            to="/dashboard/Settings"
            className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            <LuSettings size={18} />
            <span>Settings</span>
          </Link>
          <Link
            to={"/"}
            onClick={handleLogOut}
            className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            <LuLogOut size={18} />
            <span>Logout</span>
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
