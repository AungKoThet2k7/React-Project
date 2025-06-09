import React from "react";
import EditProfileImage from "../components/EditProfileImage";
import EditUserName from "../components/EditUserName";
import useCookie from "react-use-cookie";

const UserProfileCard = () => {
  const [userCookie, setUserCookie] = useCookie("user");
  const { email } = JSON.parse(userCookie);

  return (
    <div>
      <EditProfileImage />
      <div className="flex gap-10 pt-5">
        <EditUserName />
        <div>
          <h1 className="block mb-2 text-gray-800">Email Address</h1>
          <div className="bg-gray-50 border border-gray-300 text-gray-900 text-xs sm:text-sm rounded-lg inline-block w-52 p-1.5 sm:p-2.5 dark:bg-gray-700 outline-none dark:border-gray-600 dark:placeholder-gray-400 dark:text-white ">
            {email}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfileCard;
