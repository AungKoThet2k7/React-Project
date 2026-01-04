import React, { useState } from "react";
import { HiUpload } from "react-icons/hi";
import { LuCloudUpload, LuUpload } from "react-icons/lu";

const ImageUploadForm = () => {

  const [image, setImage] = useState();
  const handleImageUpload = (event) => {
    console.log(URL.createObjectURL(event.target.files[0]));
    setImage(URL.createObjectURL(event.target.files[0]));
  }

  return (
    <form className=" bg-white rounded-lg flex flex-col gap-4 shadow-lg">
      <h1 className="text-2xl text-gray-900 border-b border-gray-200 p-5">
        Image
      </h1>
      <div className="flex flex-col gap-5 p-5">
        {!image ? (
          <div className="w-full h-72 flex flex-col gap-3 items-center justify-center border border-gray-300 rounded-lg shadow">
            <LuUpload className=" text-gray-400" size={40} />
            <span className=" text-gray-400 text-xl">Upload Image</span>
          </div>
        ):(<img
          src={image}
          className="w-full h-72 border border-gray-300 rounded-lg shadow object-cover"
          alt=""
        />)}
      <input
        type="file"
        onChange={handleImageUpload}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-xs sm:text-sm rounded-lg block w-full p-1.5 sm:p-2.5 dark:bg-gray-700 outline-none dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
      />

      {/* <div className="flex flex-col gap-2">
        <label htmlFor="" className=" text-gray-900">
          Blog Image Alt
        </label>
        <input
          type="text"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-xs sm:text-sm rounded-lg block w-full p-1.5 sm:p-2.5 dark:bg-gray-700 outline-none dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
        />
      </div> */}
      </div>
    </form>
  );
};

export default ImageUploadForm;
