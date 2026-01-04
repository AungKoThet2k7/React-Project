import React, { useRef } from "react";
import toast from "react-hot-toast";
import useCookie from "react-use-cookie";
import useUserStore from "../../../store/useUserStore";

const EditProfileImage = () => {
  const [userCookie, setUserCookie] = useCookie("user");
  const [token] = useCookie("token");

  const { profile_image } = JSON.parse(userCookie);

  const { setUser } = useUserStore();

  const fileInput = useRef();

  const handleUploadPhoto = () => {
    fileInput.current.click();
  };

  const handleChangePhoto = async (event) => {
    const formData = new FormData();
    formData.append("profile_image", event.target.files[0]);

    const res = await fetch(
      import.meta.env.VITE_API_URL + "/user-profile/change-profile-image",
      {
        method: "POST",
        body: formData,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const json = await res.json();

    if (res.status === 200) {
      toast.success("Profile Image Updated Successfully");
      setUserCookie(JSON.stringify(json.user));
      setUser(json.user);
    } else {
      toast.error(json.message);
    }
  };

  return (
    <div className=" flex items-center gap-10 px-5">
      <img
        src={
          profile_image
            ? profile_image
            : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScvC6w8tifYJLzXGgX42aMl4aInILAAozKgw&s"
        }
        className="size-8 sm:size-32 shadow rounded-full"
        alt=""
      />
      <button
        onClick={handleUploadPhoto}
        className="border bg-white border-gray-200 shadow-sm hover:bg-sky-400 hover:text-white active:scale-90 duration-200 px-6 py-3 text-sky-400 rounded-full font-bold"
      >
        Upload Photo
      </button>
      <input
        onChange={handleChangePhoto}
        type="file"
        className="hidden"
        ref={fileInput}
      />
    </div>
  );
};

export default EditProfileImage;
