import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { HiPencilSquare } from "react-icons/hi2";
import useCookie from "react-use-cookie";
import useUserStore from "../../../store/useUserStore";
const EditUserName = () => {
  const [userCookie, setUserCookie] = useCookie("user");
  const [token] = useCookie("token");
  const { name } = JSON.parse(userCookie);

  const { user, setUser } = useUserStore();

  const { register, handleSubmit } = useForm();

  const handleChangeName = async (data) => {
    const res = await fetch(
      import.meta.env.VITE_API_URL + "/user-profile/change-name",
      {
        method: "PATCH",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const json = await res.json();

    if (res.status === 200) {
      toast.success("Name Updated Successfully");
      setUserCookie(JSON.stringify(json.user));
      setUser(json.user);
    } else {
      toast.error(json.message);
    }
  };
  return (
    <form onSubmit={handleSubmit(handleChangeName)} className="ps-5">
      <label htmlFor="user-name" className="block mb-2 text-gray-800">
        User Name
      </label>
      <div>
        <input
          type="text"
          id="user-name"
          defaultValue={name}
          {...register("name")}
          className=" bg-gray-50 border border-gray-300 text-gray-900 text-xs sm:text-sm rounded-lg block w-52 p-1.5 sm:p-2.5 dark:bg-gray-700 outline-none dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
        />
      </div>
    </form>
  );
};

export default EditUserName;
