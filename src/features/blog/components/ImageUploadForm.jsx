import React from "react";

const ImageUploadForm = () => {
  return (
    <form className=" bg-white rounded-lg flex flex-col gap-4 shadow-lg">
      <h1 className="text-2xl text-gray-900 border-b border-gray-200 p-5">
        Image
      </h1>
      <div className="flex flex-col gap-5 p-5">
        <img
          src="https://i.pinimg.com/736x/4a/f9/a7/4af9a7324d8c0da5338b8bee0da99c3d.jpg"
          className="w-full h-60 border border-gray-300 rounded-lg shadow object-cover"
          alt=""
        />
      <input
        type="file"
        id="title"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-xs sm:text-sm rounded-lg block w-full p-1.5 sm:p-2.5 dark:bg-gray-700 outline-none dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
      />

      <div className="flex flex-col gap-2">
        <label htmlFor="" className=" text-gray-900">
          Blog Image Alt
        </label>
        <input
          type="text"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-xs sm:text-sm rounded-lg block w-full p-1.5 sm:p-2.5 dark:bg-gray-700 outline-none dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
        />
      </div>
      </div>
    </form>
  );
};

export default ImageUploadForm;
